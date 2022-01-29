import { expect } from "chai";
import { ethers, upgrades } from "hardhat";

// Will be needed later for testing the vesting schedule
/* const txMined = async (supplier: any) => {
  const tx = await supplier();
  // wait until the transaction is mined
  await tx.wait();
}; */

describe("VotingEngine", async function () {
  it("should have correct addresses", async function () {
    const [, user1] = await ethers.getSigners();
    const supply: any = ethers.utils.parseEther("100000000000");

    // Deploy BCT Futures tokens
    const CryptoTodayFutures = await ethers.getContractFactory("BCTFuture");
    const cryptoTodayFutures = await CryptoTodayFutures.deploy(supply / 10, [
      { account: user1.address, amount: supply / 30 },
      { account: user1.address, amount: (2 * supply) / 30 },
    ]);

    await cryptoTodayFutures.deployed();

    // Deploy the Voting Engine as a proxy contract
    const VotingEngine = await ethers.getContractFactory("VotingEngine");
    const votingEngine = await upgrades.deployProxy(VotingEngine, [cryptoTodayFutures.address], {
      initializer: "initialize",
    });

    await votingEngine.deployed();

    expect(await votingEngine.bct().address).to.equal(cryptoTodayFutures.address);
  });
});
