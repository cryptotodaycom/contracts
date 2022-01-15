//SPDX-License-Identifier: WTFPL

pragma solidity 0.8.11;

import '@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/utils/math/SafeMathUpgradeable.sol';
import '@openzeppelin/contracts/token/ERC721/extensions/IERC721Enumerable.sol';
import '../interfaces/IERC20Base.sol';
import '../utils/Signature.sol';

contract VotingEngine is
  PausableUpgradeable,
  ReentrancyGuardUpgradeable,
  OwnableUpgradeable,
  Signature
{
    mapping(address => uint256) public nonceMap;
    mapping(address => uint256) public withdrawn;

    function withdraw(
        uint256 amount,
        uint256 nonce,
        bytes calldata signature
    ) external {
        require(
            verify(owner(), msg.sender, amount, nonce, signature),
            "Invalid signature"
        );

        // Current nonce has to match this one to avoid double withdrawals
        require(nonceMap[msg.sender] == nonce, "Invalid nonce");

        //TODO: transfer logic

        nonceMap[msg.sender]++;
        withdrawn[msg.sender] += amount;
    }
}