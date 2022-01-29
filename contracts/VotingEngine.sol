//SPDX-License-Identifier: WTFPL

pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/math/SafeMathUpgradeable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/IERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "../utils/Signature.sol";

contract VotingEngine is Initializable, PausableUpgradeable, ReentrancyGuardUpgradeable, OwnableUpgradeable, Signature {
  event Deposited(address indexed user, uint256 amount);
  event Withdrawn(address indexed user, uint256 amount);

  event VoteProposed(uint256 indexed proposal, uint256 rewards);
  event VoteResolved(uint256 indexed proposal, string ipfs);

  // Token logic
  IERC20 public bct;

  // Withdrawal logic
  mapping(address => uint256) public nonceMap;
  mapping(address => uint256) public withdrawn;

  // Voting logic
  uint256 internal _voteCounter;
  mapping(uint256 => string) internal _voteResolutionHash;

  function initialize(address bctContractAddress_) external initializer {
    __Context_init_unchained();
    __Pausable_init_unchained();
    __Ownable_init_unchained();
    __ReentrancyGuard_init_unchained();

    bct = IERC20(bctContractAddress_);
    _voteCounter = 0;

    _pause();
  }

  function withdraw(
    uint256 amount,
    uint256 nonce,
    bytes calldata signature
  ) external whenNotPaused nonReentrant {
    require(verify(owner(), msg.sender, amount, nonce, signature), "Invalid signature");

    // Current nonce has to match this one to avoid double withdrawals
    require(nonceMap[msg.sender] == nonce, "Invalid nonce");

    nonceMap[msg.sender]++;
    withdrawn[msg.sender] += amount;

    emit Withdrawn(_msgSender(), amount);

    bct.transfer(msg.sender, amount);
  }

  function deposit(uint256 amount) external whenNotPaused {
    bct.transferFrom(_msgSender(), address(this), amount);

    emit Deposited(_msgSender(), amount);
  }

  function proposeVote(uint256 rewardAmount) external whenNotPaused {
    uint256 voteId = _voteCounter;

    bct.transferFrom(_msgSender(), address(this), rewardAmount);

    _voteCounter++;
    emit VoteProposed(voteId, rewardAmount);
  }

  function resolveVote(uint256 id, string memory ipfs) external onlyOwner {
    require(keccak256(bytes(_voteResolutionHash[id])) == keccak256(bytes("")), "alreadyResolved");
    _voteResolutionHash[id] = ipfs;

    emit VoteResolved(id, ipfs);
  }

  //Returns the ipfs hash associated with a vote's results.
  function getVoteState(uint256 id) external view returns (string memory ipfs) {
    return _voteResolutionHash[id];
  }
}
