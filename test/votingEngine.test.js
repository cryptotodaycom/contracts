const { expect } = require("chai");
const { ethers, upgrades, network } = require("hardhat");
const { BigNumber } = require("@ethersproject/bignumber");

//Will be needed later for testing the vesting schedule
txMined = async (supplier) => {
  const tx = await supplier();
  // wait until the transaction is mined
  await tx.wait();
};

describe("VotingEngine", function () {
  it("Should have correct addresses", async function () {
    const [owner] = await ethers.getSigners();

    // Arrange
    const CyptoTodayToken = await ethers.getContractFactory("");
    const cryptoTodayToken = await CyptoTodayToken.deploy();
    await cryptoTodayToken.deployed();

    const VotingEngine = await ethers.getContractFactory("");
    const votingEngine = await VotingEngine.deploy();
    await votingEngine.deployed();

    // Act
    const VotingEngineProxy = await ethers.getContractFactory("VotingEngineProxy");
    const votingEngineProxy = await upgrades.deployProxy(
      VotingEngineProxy,
      [cryptoTodayToken.address, votingEngine.address],
      {
        initializer: "initialize"
      }
    );
    await votingEngineProxy.deployed();

    // Assert
    expect(await votingEngineProxy.votingEngine()).to.equal(votingEngine.address);
    expect(await votingEngineProxy.cryptoTodayToken()).to.equal(cryptoTodayToken.address);
  });
});
