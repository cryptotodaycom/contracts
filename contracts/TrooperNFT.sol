//SPDX-License-Identifier: WTFPL

pragma solidity 0.8.12;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract SignatureNFT {
  function getMessageHash(address to) public pure returns (bytes32) {
    return keccak256(abi.encodePacked(to));
  }

  function getEthSignedMessageHash(bytes32 messageHash) public pure returns (bytes32) {
    // Signature is produced by signing a keccak256 hash with the following format:
    // "\x19Ethereum Signed Message\n" + len(msg) + msg

    return keccak256(abi.encodePacked("\x19Ethereum Signed Message:\n32", messageHash));
  }

  function verify(
    address signer,
    address to,
    bytes calldata signature
  ) public pure returns (bool) {
    bytes32 messageHash = getMessageHash(to);
    bytes32 ethSignedMessageHash = getEthSignedMessageHash(messageHash);

    return recoverSigner(ethSignedMessageHash, signature) == signer;
  }

  function recoverSigner(bytes32 ethSignedMessageHash, bytes memory signature) public pure returns (address) {
    (bytes32 r, bytes32 s, uint8 v) = splitSignature(signature);

    return ecrecover(ethSignedMessageHash, v, r, s);
  }

  function splitSignature(bytes memory signature)
    private
    pure
    returns (
      bytes32 r,
      bytes32 s,
      uint8 v
    )
  {
    require(signature.length == 65, "Invalid signature length");

    assembly {
      /*
            First 32 bytes stores the length of the signature

            add(sig, 32) = pointer of sig + 32
            effectively, skips first 32 bytes of signature

            mload(p) loads next 32 bytes starting at the memory address p into memory
            */

      // first 32 bytes, after the length prefix
      r := mload(add(signature, 32))
      // second 32 bytes
      s := mload(add(signature, 64))
      // final byte (first byte of the next 32 bytes)
      v := byte(0, mload(add(signature, 96)))
    }

    // implicitly return (r, s, v)
  }
}

contract TrooperNFT is ERC1155, SignatureNFT, Ownable {
  mapping(address => bool) public claimed;

  constructor() ERC1155("https://ipfs.io/hash/{id}.json") {}

  function claimTrooper(bytes calldata signature) external {
    require(verify(owner(), msg.sender, signature), "Invalid signature");
    require(!claimed[msg.sender], "Already claimed");

    claimed[msg.sender] = true;

    _mint(msg.sender, 0, 1, ""); // The trooper nft will be under id 0
  }

  function airdrop(address receiver, uint256 id) external onlyOwner {
    _mint(receiver, id, 1, "");
  }
}
