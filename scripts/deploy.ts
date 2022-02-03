/* eslint-disable no-process-exit */
import { BigNumber } from "ethers";
import { upgrades } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import { LIST, LISTFuture, VotingEngine } from "../typechain";

const { ethers } = require("hardhat");

const supply: BigNumber = ethers.utils.parseUnits("100000000000", 18);
const accountList = [
  { account: "0xA4DA12887866f435b15e41f8e177491A45Cd544C", amount: supply.div(30).toString() },
  { account: "0xA4f4b810E910bE0B4719DB1f319BE8A534b6921c", amount: supply.mul(2).div(30).toString() },
];

async function main() {
  // Deploy LIST Futures tokens
  const CryptoTodayFutures = await ethers.getContractFactory("LISTFuture");
  const cryptoTodayFutures = (await CryptoTodayFutures.deploy(supply.div(10).toString(), accountList)) as LISTFuture;

  await cryptoTodayFutures.deployed();

  console.log("cryptoTodayFutures", cryptoTodayFutures.address);

  // Deploy LIST token contract
  const CyptoTodayToken = await ethers.getContractFactory("LIST");
  const cryptoTodayToken = (await CyptoTodayToken.deploy(supply.toString(), cryptoTodayFutures.address)) as LIST;

  await cryptoTodayToken.deployed();

  console.log("cryptoTodayToken", cryptoTodayToken.address);

  // Deploy VotingEngine contract

  const VotingEngine = await ethers.getContractFactory("VotingEngine");
  const votingEngine = (await upgrades.deployProxy(VotingEngine, [cryptoTodayToken.address], {
    initializer: "initialize",
    timeout: 0,
  })) as VotingEngine;

  await votingEngine.deployed();

  console.log("votingEngine", votingEngine.address);

  await cryptoTodayToken.mintToEngine(votingEngine.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
