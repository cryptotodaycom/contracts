import { expect } from "chai";
import { ethers } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import { TrooperNFT } from "../typechain";

const address0 = ethers.constants.AddressZero;

describe("testing trooper nft minting", async function () {
  let owner: any, user1: any, user2: any;
  let trooperNft: TrooperNFT;

  before(async () => {
    [owner, user1, user2] = await ethers.getSigners();

    // Deploy trooper NFT contract
    const TrooperNft = await ethers.getContractFactory("TrooperNFT");
    trooperNft = (await TrooperNft.deploy()) as TrooperNFT;
    await trooperNft.deployed();
  });

  // emitted event is TransferSingle(operator, address(0), to, id, amount);

  describe("user interactions", async function () {
    it("should allow airdrop minting", async function () {
      // should emit minted event
      await expect(trooperNft.airdrop(user2.address, 1)).to.emit(trooperNft, "TransferSingle").withArgs(owner.address, address0, user2.address, 1, 1);
    });

    it("should reject wrong signature", async function () {
      const payload = ethers.utils.arrayify(ethers.utils.solidityKeccak256(["address"], [user2.address]));
      const signature = ethers.utils.arrayify(await owner.signMessage(payload));

      await expect(trooperNft.connect(user1).claimTrooper(signature)).to.be.revertedWith("Invalid signature");
    });

    it("should allow claiming (only once per address)", async function () {
      const payload = ethers.utils.arrayify(ethers.utils.solidityKeccak256(["address"], [user1.address]));
      const signature = ethers.utils.arrayify(await owner.signMessage(payload));

      await expect(trooperNft.connect(user1).claimTrooper(signature))
        .to.emit(trooperNft, "TransferSingle")
        .withArgs(user1.address, address0, user1.address, 0, 1);
      await expect(trooperNft.connect(user1).claimTrooper(signature)).to.be.revertedWith("Already claimed");
    });

    it("should reject signature of wrong length", async function () {
      const payload = ethers.utils.arrayify(ethers.utils.solidityKeccak256(["address"], [user1.address]));
      const payloadBinary = ethers.utils.arrayify(payload);

      await expect(trooperNft.connect(user1).claimTrooper(payloadBinary)).to.be.revertedWith("Invalid signature length");
    });
  });
});
