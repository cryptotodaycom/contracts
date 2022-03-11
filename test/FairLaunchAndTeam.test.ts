import { expect } from "chai";
import { BigNumber } from "ethers";
import { ethers, upgrades } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import { LIST, LISTFuture, VotingEngine } from "../typechain";

const address0 = "0x0000000000000000000000000000000000000000";

const supply: BigNumber = ethers.utils.parseUnits("100000000000", 18);

describe("testing v1", async function () {
  let user1: any, user2: any, user3: any, user4: any, reserve: any;
  let cryptoTodayFutures: LISTFuture;
  let cryptoTodayToken: LIST;
  let votingEngine: VotingEngine;

  before(async () => {
    [, user1, user2, user3, user4, reserve] = await ethers.getSigners();

    // Deploy LIST Futures tokens
    const CryptoTodayFutures = await ethers.getContractFactory("LISTFuture");
    cryptoTodayFutures = (await CryptoTodayFutures.deploy(supply.div(10).toString(), [
      { account: user1.address, amount: supply.div(30).toString() },
      { account: user2.address, amount: supply.mul(2).div(30).toString() },
    ])) as LISTFuture;

    await cryptoTodayFutures.deployed();

    // Deploy LIST token contract
    const CyptoTodayToken = await ethers.getContractFactory("LIST");
    cryptoTodayToken = (await CyptoTodayToken.deploy(supply.toString(), cryptoTodayFutures.address)) as LIST;

    await cryptoTodayToken.deployed();

    // Deploy VotingEngine contract

    const VotingEngine = await ethers.getContractFactory("VotingEngine");
    votingEngine = (await upgrades.deployProxy(VotingEngine, [cryptoTodayToken.address], {
      initializer: "initialize",
    })) as VotingEngine;

    await votingEngine.deployed();
  });

  describe("public fair launch", async function () {
    it("should revert if sale hasn't started", async function () {
      await expect(cryptoTodayToken.connect(user1).invest(user1.address, address0, { value: ethers.utils.parseEther("0.5") })).to.be.revertedWith(
        "Pausable: paused"
      );
    });

    it("should revert if sale not done", async function () {
      await expect(cryptoTodayToken.connect(user2).claimShares()).to.be.revertedWith("saleOngoing");
    });

    it("team tokens revert if sale hasn't happened", async function () {
      await expect(cryptoTodayToken.connect(user1).claimFutures(supply.div(300))).to.be.revertedWith("saleNotDone");
    });

    it("should allow start of sale", async function () {
      await expect(await cryptoTodayToken.saleStartedTS()).to.be.equal(0);
      await cryptoTodayToken.startSale();

      await expect(await cryptoTodayToken.saleStartedTS()).to.not.be.equal(0);
    });

    it("should revert if sale started", async function () {
      await expect(cryptoTodayToken.startSale()).to.be.revertedWith("saleAlreadyStarted");
    });

    it("should allow investment and emit correct events", async function () {
      // We aren't checking timestamps
      await expect(cryptoTodayToken.connect(user1).invest(user1.address, address0, { value: ethers.utils.parseEther("1") })).to.emit(
        cryptoTodayToken,
        "Investment"
      );
      await expect(cryptoTodayToken.connect(user2).invest(user2.address, address0, { value: ethers.utils.parseEther("0.5") })).to.emit(
        cryptoTodayToken,
        "Investment"
      );
      // .withArgs(user1.address, ethers.utils.parseEther("0.5"), () => true); need to fix timestamp matching

      await expect(await cryptoTodayToken.investments(user1.address)).to.be.equal(ethers.utils.parseEther("1"));
      await expect(await cryptoTodayToken.investments(user2.address)).to.be.equal(ethers.utils.parseEther("0.5"));
    });

    it("should allow adding additional funds into investment", async function () {
      await cryptoTodayToken.connect(user2).invest(user2.address, address0, { value: ethers.utils.parseEther("0.5") });
      await expect(await cryptoTodayToken.investments(user2.address)).to.be.equal(ethers.utils.parseEther("1"));
    });

    it("should allow investing for someone else", async function () {
      await cryptoTodayToken.connect(user2).invest(user3.address, address0, { value: ethers.utils.parseEther("1") });
      await expect(await cryptoTodayToken.investments(user3.address)).to.be.equal(ethers.utils.parseEther("1"));
    });

    it("should match contract balance before referals", async function () {
      await expect(await ethers.provider.getBalance(cryptoTodayToken.address)).to.be.equal(ethers.utils.parseEther("3"));
    });

    it("should allow investment with referal", async function () {
      // We aren't checking timestamps
      await expect(
        await cryptoTodayToken.connect(user2).invest(user3.address, user1.address, { value: ethers.utils.parseEther("1") })
      ).to.changeEtherBalance(user1, ethers.utils.parseEther("0.05"));

      await expect(
        cryptoTodayToken.connect(user1).invest(user3.address, user4.address, { value: ethers.utils.parseEther("0.5") })
      ).to.be.revertedWith("refererNotInvested");

      await expect(await cryptoTodayToken.investments(user3.address)).to.be.equal(ethers.utils.parseEther("2"));
    });

    it("should match contract balance after referals", async function () {
      await expect(await ethers.provider.getBalance(cryptoTodayToken.address)).to.be.equal(ethers.utils.parseEther("3.95"));
    });

    it("should allow closing the investment window", async function () {
      await cryptoTodayToken.endSale();
    });

    it("should allow claiming investment rewards", async function () {
      await expect(() => cryptoTodayToken.connect(user1).claimShares()).to.changeTokenBalance(cryptoTodayToken, user1, supply.mul(75).div(10000));
      await expect(() => cryptoTodayToken.connect(user2).claimShares()).to.changeTokenBalance(cryptoTodayToken, user2, supply.mul(75).div(10000));
      await expect(() => cryptoTodayToken.connect(user3).claimShares()).to.changeTokenBalance(cryptoTodayToken, user3, supply.mul(150).div(10000));
    });

    it("should revert if already claimed", async function () {
      await expect(cryptoTodayToken.connect(user2).claimShares()).to.be.revertedWith("alreadyClaimed");
    });

    it("should revert if didn't invest", async function () {
      await expect(cryptoTodayToken.connect(user4).claimShares()).to.be.revertedWith("notInvestor");
    });

    it("should revert if sale ended", async function () {
      await expect(cryptoTodayToken.startSale()).to.be.revertedWith("saleEnded");
    });
  });

  describe("team token claiming", async function () {
    it("should revert if 1 year hasn't passed", async function () {
      await expect(cryptoTodayToken.connect(user1).claimFutures(supply.div(300))).to.be.revertedWith("notEnoughTimePassed");

      // await expect(await cryptoTodayToken.saleStartedTS()).to.be.equal(saleStartedTS.getTime() / 1000);
    });

    it("should allow claiming if 1 year has passed", async function () {
      await ethers.provider.send("evm_increaseTime", [60 * 60 * 24 * 366]);
      await ethers.provider.send("evm_mine", []);

      expect(await cryptoTodayFutures.connect(user1).approve(cryptoTodayToken.address, 2000))
        .to.emit(cryptoTodayFutures, "Approval")
        .withArgs(user1.address, cryptoTodayToken.address, 2000);

      await expect(() => cryptoTodayToken.connect(user1).claimFutures(1000)).to.changeTokenBalance(cryptoTodayToken, user1, 1000);
      await expect(() => cryptoTodayToken.connect(user1).claimFutures(1000)).to.changeTokenBalance(cryptoTodayFutures, user1, -1000);
      await expect(cryptoTodayToken.connect(user1).claimFutures(1000)).to.be.revertedWith("ERC20: burn amount exceeds allowance");
    });
  });

  describe("mint to voting engine", async function () {
    it("mint to engine and reserve wallets", async function () {
      await expect(() => cryptoTodayToken.mintReserveAndVestingInvestments(votingEngine.address, reserve.address)).to.changeTokenBalance(
        cryptoTodayToken,
        votingEngine,
        supply.mul(27).div(100)
      );

      // await expect(await cryptoTodayToken.saleStartedTS()).to.be.equal(saleStartedTS.getTime() / 1000);
    });
  });
});
