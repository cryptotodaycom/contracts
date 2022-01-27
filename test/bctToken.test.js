const { expect } = require("chai");
const { ethers, upgrades, network } = require("hardhat");
const { BigNumber } = require("@ethersproject/bignumber");

//Will be needed later for testing the vesting schedule
txMined = async (supplier) => {
  const tx = await supplier();
  // wait until the transaction is mined
  await tx.wait();
};

describe("bctToken", async function () {
  const [owner] = await ethers.getSigners();

  // Deploy BCT Dummy tokens
  const CryptoTodayDummy = await ethers.getContractFactory("BCTDummy");
  const cryptoTodayDummy = await CryptoTodayDummy.deploy();

  await cryptoTodayDummy.deployed();

  // Deploy BCT token contract
  const CyptoTodayToken = await ethers.getContractFactory("BCT");
  const cryptoTodayToken = await CyptoTodayToken.deploy([cryptoTodayDummy.address]);

  await cryptoTodayToken.deployed();

  describe("fair launch sale", async function () {
    it("should allow start of sale", async function () {
      expect(await votingEngine.bct().address).to.equal(cryptoTodayToken.address);
      expect(await cryptoTodayToken.bctDummy()).to.equal(cryptoTodayDummy.address);
    });

    it("should allow investment and emit correct events", async function () {
      expect(await votingEngine.bct().address).to.equal(cryptoTodayToken.address);
      expect(await cryptoTodayToken.bctDummy()).to.equal(cryptoTodayDummy.address);
    });

    it("should allow adding additional funds into investment", async function () {
      expect(await votingEngine.bct().address).to.equal(cryptoTodayToken.address);
      expect(await cryptoTodayToken.bctDummy()).to.equal(cryptoTodayDummy.address);
    });

    it("should allow investing for someone else", async function () {
      expect(await votingEngine.bct().address).to.equal(cryptoTodayToken.address);
      expect(await cryptoTodayToken.bctDummy()).to.equal(cryptoTodayDummy.address);
    });

    it("should allow closing the investment window", async function () {
      expect(await votingEngine.bct().address).to.equal(cryptoTodayToken.address);
      expect(await cryptoTodayToken.bctDummy()).to.equal(cryptoTodayDummy.address);
    });

    it("should allow claiming investment rewards", async function () {
      expect(await votingEngine.bct().address).to.equal(cryptoTodayToken.address);
      expect(await cryptoTodayToken.bctDummy()).to.equal(cryptoTodayDummy.address);
    });

    it("should allow claiming proxy investment rewards", async function () {
      expect(await votingEngine.bct().address).to.equal(cryptoTodayToken.address);
      expect(await cryptoTodayToken.bctDummy()).to.equal(cryptoTodayDummy.address);
    });
  });

  describe("claiming team tokens", async function () {
    it("shouldn't allow exchanging dummy tokens before cliff", async function () {
      expect(await votingEngine.bct().address).to.equal(cryptoTodayToken.address);
      expect(await cryptoTodayToken.bctDummy()).to.equal(cryptoTodayDummy.address);
    });

    it("should allow exchanging dummy tokens after cliff", async function () {
      expect(await votingEngine.bct().address).to.equal(cryptoTodayToken.address);
      expect(await cryptoTodayToken.bctDummy()).to.equal(cryptoTodayDummy.address);
    });
  });
});
