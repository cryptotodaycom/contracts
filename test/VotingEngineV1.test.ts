import { expect } from "chai";
import { BigNumber } from "ethers";
import { ethers, upgrades } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import { BCTFuture, VotingEngine } from "../typechain";

const address0 = "0x0000000000000000000000000000000000000000";

const supply: BigNumber = ethers.utils.parseUnits("100000000000", 18);

describe("testing v1", async function () {
  let user1: any, user2: any, user3: any, user4: any, user5: any, user6: any, user7: any, user8: any;
  let cryptoTodayFutures: BCTFuture;
  let votingEngine: VotingEngine;

  before(async () => {
    [, user1, user2, user3, user4, user5, user6, user7, user8] = await ethers.getSigners();

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
      expect(votingEngine.togglePause()).to.be.revertedWith("Abc");
    });

    it("should allow owner to unpause", async function () {
      expect(votingEngine.togglePause());
    });

    it("should allow a user to deposit BCT up to approval amount", async function () {
      // TODO: fix allowance logic
      await expect(await cryptoTodayFutures.connect(user1).approve(votingEngine.address, 1000))
        .to.emit(cryptoTodayFutures, "Approval")
        .withArgs(user1.address, votingEngine.address, 1000);

      await expect(() => votingEngine.connect(user1).deposit(500)).to.changeTokenBalance(cryptoTodayFutures, user1, -500);
      await expect(await votingEngine.connect(user1).deposit(500))
        .to.emit(votingEngine, "Deposited")
        .withArgs(user1.address, 500);
    });

    it("should allow a user to withdraw funds with valid signature", async function () {
      await expect(() => votingEngine.connect(user1).deposit(500)).to.changeTokenBalance(cryptoTodayFutures, user1, -500);
      await expect(await votingEngine.connect(user1).deposit(500))
        .to.emit(votingEngine, "Deposited")
        .withArgs(user1.address, 500);
    });

    it("should revert withdraw funds with invalid signature", async function () {
      await expect(() => votingEngine.connect(user1).deposit(500)).to.changeTokenBalance(cryptoTodayFutures, user1, -500);
      await expect(await votingEngine.connect(user1).deposit(500))
        .to.emit(votingEngine, "Deposited")
        .withArgs(user1.address, 500);
    });
  });

  describe("lister interactions", async function () {
    it("should revert if paused", async function () {
      expect(votingEngine.togglePause()).to.be.revertedWith("Abc");
    });

    it("should allow owner to unpause", async function () {
      expect(votingEngine.togglePause());
    });

    it("should allow lister to start a vote", async function () {
      // TODO: fix allowance logic
      await expect(await cryptoTodayFutures.connect(user1).approve(votingEngine.address, 1000))
        .to.emit(cryptoTodayFutures, "Approval")
        .withArgs(user1.address, votingEngine.address, 1000);

      await expect(() => votingEngine.connect(user1).deposit(500)).to.changeTokenBalance(cryptoTodayFutures, user1, -500);
      await expect(await votingEngine.connect(user1).deposit(500))
        .to.emit(votingEngine, "Deposited")
        .withArgs(user1.address, 500);
    });

    it("should allow owner to resolve vote", async function () {
      await expect(() => votingEngine.connect(user1).deposit(500)).to.changeTokenBalance(cryptoTodayFutures, user1, -500);
      await expect(await votingEngine.connect(user1).deposit(500))
        .to.emit(votingEngine, "Deposited")
        .withArgs(user1.address, 500);
    });
  });
});
