import { expect } from "chai";
import { ethers } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import { Signature } from "../typechain";

describe("signature", async function () {
  let owner: any, user1: any;
  let signature: Signature;

  before(async () => {
    [owner, user1] = await ethers.getSigners();

    // Deploy BCT Futures tokens
    const Signature = await ethers.getContractFactory("Signature");
    signature = (await Signature.deploy()) as Signature;

    await signature.deployed();
  });

  it("should provide valid message hash", async function () {
    await expect(await signature.getMessageHash(user1.address, 500, 0)).to.equal(
      ethers.utils.solidityKeccak256(["address", "uint256", "uint256"], [user1.address, 500, 0])
    );
  });

  it("should provide valid signature", async function () {
    const payload = await signature.getMessageHash(user1.address, 500, 0);
    const payloadBinary = ethers.utils.arrayify(payload);
    const signedMsg = await owner.signMessage(payloadBinary);
    const signedMsgBinary = ethers.utils.arrayify(signedMsg);
    // const signedMsgHash = await signature.getEthSignedMessageHash(signedMsg);
    console.log("signedMsgBinary", payload.length, payload);
    console.log("signedMsg", signedMsg.length, signedMsg);
    console.log("payloadBinary", payloadBinary.length, payloadBinary);
    console.log("payload", payload.length, payload);

    const ethSignedMessageHash = await signature.getEthSignedMessageHash(payloadBinary);
    const contractRecoveredSigner = await signature.recoverSigner(ethSignedMessageHash, signedMsgBinary);
    await expect(ethers.utils.verifyMessage(payloadBinary, signedMsgBinary), owner.address).to.equal(contractRecoveredSigner);

    await expect(await signature.verify(owner.address, user1.address, 500, 0, signedMsgBinary)).to.be.true;
  });
});
