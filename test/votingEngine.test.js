const { expect } = require("chai");
const { ethers, upgrades, network } = require("hardhat");
const { BigNumber } = require("@ethersproject/bignumber");

//Will be needed later for testing the vesting schedule
txMined = async (supplier) => {
  const tx = await supplier();
  // wait until the transaction is mined
  await tx.wait();
};

describe("VotingEngine", async function () {
  const [owner] = await ethers.getSigners();

  // Deploy BCT Dummy tokens
  const CryptoTodayDummy = await ethers.getContractFactory("BCTDummy");
  const cryptoTodayDummy = await CryptoTodayDummy.deploy();

  await cryptoTodayDummy.deployed();

  // Deploy BCT token contract
  const CyptoTodayToken = await ethers.getContractFactory("BCT");
  const cryptoTodayToken = await CyptoTodayToken.deploy([cryptoTodayDummy.address]);

  await cryptoTodayToken.deployed();

  // Deploy the Voting Engine as a proxy contract
  const VotingEngine = await ethers.getContractFactory("VotingEngine");
  const votingEngine = await upgrades.deployProxy(VotingEngine, [cryptoTodayToken.address], {
    initializer: "initialize"
  });

  await votingEngine.deployed();

  it("should have correct addresses", async function () {
    expect(await votingEngine.bct().address).to.equal(cryptoTodayToken.address);
    expect(await cryptoTodayToken.bctDummy()).to.equal(cryptoTodayDummy.address);
  });

  it("should emit correct events", async function () {
    expect(await votingEngine.bct().address).to.equal(cryptoTodayToken.address);
    expect(await cryptoTodayToken.bctDummy()).to.equal(cryptoTodayDummy.address);
  });

  it("should allow deposits", async function () {
    expect(await votingEngine.bct().address).to.equal(cryptoTodayToken.address);
    expect(await cryptoTodayToken.bctDummy()).to.equal(cryptoTodayDummy.address);
  });
});
