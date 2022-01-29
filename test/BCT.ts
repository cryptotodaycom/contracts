import { expect } from "chai";
import { BigNumber } from "ethers";
import { ethers } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import { BCT, BCTFuture } from "../typechain";

const supply: BigNumber = ethers.utils.parseUnits("100000000000", 18);
// const vestingPeriod = 31536000;

// Will be needed later for testing the vesting schedule
const txMined = async (supplier: any) => {
  const tx = await supplier();
  // wait until the transaction is mined
  await tx.wait();
};

describe("bctToken", async function () {
  let owner: any, user1: any, user2: any, user3: any, user4: any;
  let cryptoTodayFutures: BCTFuture;
  let cryptoTodayToken: BCT;

  before(async () => {
    [owner, user1, user2, user3, user4] = await ethers.getSigners();

    // Deploy BCT Futures tokens
    const CryptoTodayFutures = await ethers.getContractFactory("BCTFuture");
    cryptoTodayFutures = await CryptoTodayFutures.deploy(supply.div(10).toString(), [
      { account: user1.address, amount: supply.div(30).toString() },
      { account: user1.address, amount: supply.mul(2).div(30).toString() },
    ]);

    await cryptoTodayFutures.deployed();

    // Deploy BCT token contract
    const CyptoTodayToken = await ethers.getContractFactory("BCT");
    cryptoTodayToken = await CyptoTodayToken.deploy(supply.toString(), cryptoTodayFutures.address);

    await cryptoTodayToken.deployed();
  });
  describe("public fair launch", async function () {
    it("should revert if sale hasn't started", async function () {
      await expect(cryptoTodayToken.connect(user1).invest(user1.address, { value: ethers.utils.parseEther("1") })).to.be.revertedWith("Abc");
    });

    it("should allow start of sale", async function () {
      await cryptoTodayToken.startSale();
      const saleStartedTS = new Date();
      await expect(await cryptoTodayToken.saleStartedTS()).to.be.equal(saleStartedTS.getTime() / 1000);
    });

    it("should allow investment and emit correct events", async function () {
      await expect(cryptoTodayToken.connect(user1).invest(user1.address, { value: ethers.utils.parseEther("1") }))
        .to.emit(cryptoTodayToken, "Investment")
        .withArgs(user1.address, ethers.utils.parseEther("1"), new Date().getTime());
      await expect(cryptoTodayToken.connect(user2).invest(user2.address, { value: ethers.utils.parseEther("0.5") }))
        .to.emit(cryptoTodayToken, "Investment")
        .withArgs(user1.address, ethers.utils.parseEther("0.5"), new Date().getTime());

      await expect(await cryptoTodayToken.investments(user1.address)).to.be.equal(ethers.utils.parseEther("1"));
      await expect(await cryptoTodayToken.investments(user2.address)).to.be.equal(ethers.utils.parseEther("0.5"));
    });

    it("should allow adding additional funds into investment", async function () {
      await cryptoTodayToken.connect(user2).invest(user2.address, { value: ethers.utils.parseEther("0.5") });
      await expect(await cryptoTodayToken.investments(user2.address)).to.be.equal(ethers.utils.parseEther("1"));
    });

    it("should allow investing for someone else", async function () {
      await cryptoTodayToken.connect(user2).invest(user3.address, { value: ethers.utils.parseEther("1") });
      await expect(await cryptoTodayToken.investments(user3.address)).to.be.equal(ethers.utils.parseEther("1"));
    });

    it("should allow closing the investment window", async function () {
      await cryptoTodayToken.endSale();
    });

    it("should allow claiming investment rewards", async function () {
      await cryptoTodayToken.connect(user2).claimShares();
    });

    it("should revert if already claimed or didn't invest", async function () {
      expect(cryptoTodayToken.connect(user2).claimShares()).to.be.revertedWith("abc");
      expect(cryptoTodayToken.connect(user4).claimShares()).to.be.revertedWith("abc");
    });
  });
  describe("claiming team tokens", async function () {
    it("shouldn't allow exchanging futures tokens before cliff", async function () {});

    it("should allow exchanging futures tokens after cliff", async function () {});
  });
});
