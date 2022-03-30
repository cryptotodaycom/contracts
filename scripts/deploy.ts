/* eslint-disable no-process-exit */
import { BigNumber } from "ethers";
import { upgrades } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import { LIST, LISTFuture, VotingEngine } from "../typechain";

const { ethers } = require("hardhat");

const supply: BigNumber = ethers.utils.parseUnits("100000000000", 18);

// List of team accounts that will receive 10% of the total supply in LISTFuture tokens, these are not the final account addresses
const accountList = [
  { account: "0xA4DA12887866f435b15e41f8e177491A45Cd544C", amount: supply.div(30).toString() },
  { account: "0xA4f4b810E910bE0B4719DB1f319BE8A534b6921c", amount: supply.mul(2).div(30).toString() },
];

const reserve = "0xabc0000000000000000000000000000000000000";

async function main() {
  // Deploy LIST Futures tokens
  const CryptoTodayFutures = await ethers.getContractFactory("LISTFuture");
  // Notice the supply of the futures is 10% of the total supply, and the account list from above is used
  const cryptoTodayFutures = (await CryptoTodayFutures.deploy(supply.div(10).toString(), accountList)) as LISTFuture;

  await cryptoTodayFutures.deployed();

  console.log("cryptoTodayFutures", cryptoTodayFutures.address);

  // Deploy LIST token contract
  const CyptoTodayToken = await ethers.getContractFactory("LIST");
  // Notice the full supply is being used and the futures contract is linked
  const cryptoTodayToken = (await CyptoTodayToken.deploy(supply.toString(), cryptoTodayFutures.address)) as LIST;

  await cryptoTodayToken.deployed();

  console.log("cryptoTodayToken", cryptoTodayToken.address);

  // Deploy VotingEngine contract

  const VotingEngine = await ethers.getContractFactory("VotingEngine");
  // Notice the proper $LIST token is linked
  const votingEngine = (await upgrades.deployProxy(VotingEngine, [cryptoTodayToken.address], {
    initializer: "initialize",
    timeout: 0,
  })) as VotingEngine;

  await votingEngine.deployed();

  console.log("votingEngine", votingEngine.address);

  // Mint 60% of the tokens to the reserve
  await cryptoTodayToken.mintReserve(reserve);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
