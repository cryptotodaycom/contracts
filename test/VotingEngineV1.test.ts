import { expect } from "chai";
import { BigNumber } from "ethers";
import { ethers, upgrades } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import { BCTFuture, VotingEngine } from "../typechain";

const supply: BigNumber = ethers.utils.parseUnits("100000000000", 18);

describe("testing v1", async function () {
  let owner: any, user1: any, user2: any, user3: any, user4: any, user5: any, user6: any, user7: any, user8: any;
  let cryptoTodayFutures: BCTFuture;
  let votingEngine: VotingEngine;

  before(async () => {
    [owner, user1, user2, user3, user4, user5, user6, user7, user8] = await ethers.getSigners();

    // Deploy BCT Futures tokens
    const CryptoTodayFutures = await ethers.getContractFactory("BCTFuture");
    cryptoTodayFutures = (await CryptoTodayFutures.deploy(supply.toString(), [
      { account: user1.address, amount: supply.div(8).toString() },
      { account: user2.address, amount: supply.div(8).toString() },
      { account: user3.address, amount: supply.div(8).toString() },
      { account: user4.address, amount: supply.div(8).toString() },
      { account: user5.address, amount: supply.div(8).toString() },
      { account: user6.address, amount: supply.div(8).toString() },
      { account: user7.address, amount: supply.div(8).toString() },
      { account: user8.address, amount: supply.div(8).toString() },
    ])) as BCTFuture;

    await cryptoTodayFutures.deployed();

    // Deploy VotingEngine contract

    const VotingEngine = await ethers.getContractFactory("VotingEngine");
    votingEngine = (await upgrades.deployProxy(VotingEngine, [cryptoTodayFutures.address], {
      initializer: "initialize",
    })) as VotingEngine;

    await votingEngine.deployed();

    await expect(await votingEngine.bct()).to.equal(cryptoTodayFutures.address);
  });

  describe("user interactions", async function () {
    it("should revert if paused", async function () {
      await expect(await cryptoTodayFutures.connect(user3).approve(votingEngine.address, 500))
        .to.emit(cryptoTodayFutures, "Approval")
        .withArgs(user3.address, votingEngine.address, 500);

      await expect(votingEngine.connect(user3).deposit(500)).to.be.revertedWith("Pausable: paused");
    });

    it("should allow owner to unpause", async function () {
      await expect(votingEngine.togglePause());
    });

    it("should allow a user to deposit BCT up to approval amount, fail above", async function () {
      await expect(await cryptoTodayFutures.connect(user1).approve(votingEngine.address, 1000))
        .to.emit(cryptoTodayFutures, "Approval")
        .withArgs(user1.address, votingEngine.address, 1000);

      await expect(() => votingEngine.connect(user1).deposit(500)).to.changeTokenBalance(cryptoTodayFutures, user1, -500);
      await expect(await votingEngine.connect(user1).deposit(500))
        .to.emit(votingEngine, "Deposited")
        .withArgs(user1.address, 500);
    });

    it("should allow a user to withdraw funds with valid signature (once)", async function () {
      const payload = ethers.utils.arrayify(ethers.utils.solidityKeccak256(["address", "uint256", "uint256"], [user1.address, 500, 0]));
      const signature = ethers.utils.arrayify(await owner.signMessage(payload));

      console.log(payload, signature);
      await expect(() => votingEngine.connect(user1).withdrawFor(500, 0, user1.address, signature)).to.changeTokenBalance(
        cryptoTodayFutures,
        user1,
        500
      );
      // Second attempt should fail as described
      await expect(votingEngine.connect(user1).withdrawFor(500, 0, user1.address, signature)).to.be.revertedWith("Invalid nonce");
    });

    it("should revert withdraw funds with invalid signature", async function () {
      const payload = ethers.utils.arrayify(ethers.utils.solidityKeccak256(["address", "uint256", "uint256"], [user1.address, 500, 0]));
      const signature = ethers.utils.arrayify(await owner.signMessage(payload));

      await expect(votingEngine.connect(user1).withdrawFor(500, 0, user2.address, signature)).to.be.revertedWith("Invalid signature");
      await expect(votingEngine.connect(user1).withdrawFor(500, 2, user1.address, signature)).to.be.revertedWith("Invalid signature");
      await expect(votingEngine.connect(user1).withdrawFor(501, 0, user1.address, signature)).to.be.revertedWith("Invalid signature");
    });
  });

  describe("lister interactions", async function () {
    it("should revert if paused", async function () {
      await votingEngine.togglePause();
      await expect(cryptoTodayFutures.connect(user3).approve(votingEngine.address, 500))
        .to.emit(cryptoTodayFutures, "Approval")
        .withArgs(user3.address, votingEngine.address, 500);

      await expect(votingEngine.connect(user3).proposeVote(500)).to.be.revertedWith("Pausable: paused");
      await votingEngine.togglePause();
    });

    it("should allow lister to start a vote", async function () {
      // TODO: fix allowance logic
      await expect(cryptoTodayFutures.connect(user1).approve(votingEngine.address, 1000))
        .to.emit(cryptoTodayFutures, "Approval")
        .withArgs(user1.address, votingEngine.address, 1000);

      await expect(votingEngine.connect(user1).proposeVote(500)).to.emit(votingEngine, "VoteProposed").withArgs(0, 500);
      await expect(() => votingEngine.connect(user1).proposeVote(500)).to.changeTokenBalance(cryptoTodayFutures, user1, -500);
    });

    it("should allow only owner to resolve vote, and only once", async function () {
      await expect(votingEngine.connect(owner).resolveVote(0, "hash1")).to.emit(votingEngine, "VoteResolved").withArgs(0, "hash1");
      await expect(votingEngine.connect(owner).resolveVote(0, "hash2")).to.be.revertedWith("alreadyResolved");
      await expect(votingEngine.connect(user1).resolveVote(1, "hash3")).to.be.revertedWith("Ownable: caller is not the owner");
    });

    it("should return correct ipfs hash", async function () {
      await expect(await votingEngine.getVoteState(0)).to.equal("hash1");
    });
  });
});
