import { expect } from "chai";
import { ethers } from "hardhat";

const supply: any = ethers.utils.parseEther("100000000");
// const vestingPeriod = 31536000;

// Will be needed later for testing the vesting schedule
const txMined = async (supplier: any) => {
  const tx = await supplier();
  // wait until the transaction is mined
  await tx.wait();
};

describe("bctToken", async function () {
  const [owner, user1, user2, user3] = await ethers.getSigners();
  let cryptoTodayFutures;
  let cryptoTodayToken;

  beforeEach(async () => {
    // Deploy BCT Futures tokens
    const CryptoTodayFutures = await ethers.getContractFactory("BCTFuture");
    cryptoTodayFutures = await CryptoTodayFutures.deploy(supply / 10, [
      { account: user1.address, amount: supply / 30 },
      { account: user1.address, amount: (2 * supply) / 30 },
    ]);

    await cryptoTodayFutures.deployed();

    // Deploy BCT token contract
    const CyptoTodayToken = await ethers.getContractFactory("BCT");
    cryptoTodayToken = await CyptoTodayToken.deploy(supply, cryptoTodayFutures.address);

    await cryptoTodayToken.deployed();
  });

  describe("fair launch sale", async function () {
    it("should allow start of sale", async function () {
      expect(1).to.equal(1);
    });

    it("should allow investment and emit correct events", async function () {});

    it("should allow adding additional funds into investment", async function () {});

    it("should allow investing for someone else", async function () {});

    it("should allow closing the investment window", async function () {});

    it("should allow claiming investment rewards", async function () {});

    it("should allow claiming proxy investment rewards", async function () {});
  });

  describe("claiming team tokens", async function () {
    it("shouldn't allow exchanging futures tokens before cliff", async function () {});

    it("should allow exchanging futures tokens after cliff", async function () {});
  });
});
