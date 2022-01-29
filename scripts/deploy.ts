import { BigNumber } from "ethers";
import { upgrades } from "hardhat";
import { BCT, BCTFuture, VotingEngine } from "../typechain";

const { ethers } = require("hardhat");

const supply: BigNumber = ethers.utils.parseUnits("100000000000", 18);
const accountList = [
  { account: "0xabc", amount: supply.div(30).toString() },
  { account: "0xabc", amount: supply.mul(2).div(30).toString() },
];

async function main() {
  // Deploy BCT Futures tokens
  const CryptoTodayFutures = await ethers.getContractFactory("BCTFuture");
  const cryptoTodayFutures = (await CryptoTodayFutures.deploy(supply.div(10).toString(), accountList)) as BCTFuture;

  await cryptoTodayFutures.deployed();

  // Deploy BCT token contract
  const CyptoTodayToken = await ethers.getContractFactory("BCT");
  const cryptoTodayToken = (await CyptoTodayToken.deploy(supply.toString(), cryptoTodayFutures.address)) as BCT;

  await cryptoTodayToken.deployed();

  // Deploy VotingEngine contract

  const VotingEngine = await ethers.getContractFactory("VotingEngine");
  const votingEngine = (await upgrades.deployProxy(VotingEngine, [cryptoTodayToken.address], {
    initializer: "initialize",
  })) as VotingEngine;

  await votingEngine.deployed();

  await cryptoTodayToken.mintToEngine(votingEngine.address);

  console.log(votingEngine.address, cryptoTodayFutures.address, cryptoTodayToken.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
