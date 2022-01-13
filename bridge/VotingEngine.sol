//SPDX-License-Identifier: WTFPL

pragma solidity 0.8.2;

import '@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/utils/math/SafeMathUpgradeable.sol';
import '@openzeppelin/contracts/token/ERC721/extensions/IERC721Enumerable.sol';
import '../interfaces/IERC20Base.sol';

contract VotingEngine is
  PausableUpgradeable,
  ReentrancyGuardUpgradeable,
  OwnableUpgradeable
{
    using SafeMathUpgradeable for uint256;
    address NULL_ADDRESS;

}