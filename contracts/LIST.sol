//SPDX-License-Identifier: MIT

pragma solidity 0.8.13;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Capped.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

interface ILISTF is IERC20 {
  function burnFrom(address account, uint256 amount) external;
}

/// @title List token contract with fair launch and team token logic included
/// @author Noah Jelich
/// @notice Only 10% of the fair launch tokens are sent to the buyers instantly, the rest are vested
contract LIST is ERC20Capped, Ownable, Pausable {
  uint256 private constant VESTING_PERIOD = 30 days;
  uint256 private constant VESTING_PERIOD_TEAM = 365 days;

  struct Claim {
    bool isIn;
    uint256 claimed;
    uint256 share;
  }

  struct AddressSet {
    address[] values;
    mapping(address => Claim) investments;
  }

  AddressSet internal _investors;

  // Public investments for transparency
  mapping(address => uint256) public investments;
  uint256 public totalStake;

  /// @notice this event will be used by the offchain system to detect when an investment was made (to provide bonuses and vested shares)
  event Investment(address indexed investor, uint256 value, uint256 timestamp);

  uint256 public saleStartedTS;
  bool internal _saleEnded = false;

  ILISTF public immutable listFuture;

  constructor(uint256 cap, address listFutureAddress) ERC20("CryptoToday LIST", "$LIST") ERC20Capped(cap) {
    listFuture = ILISTF(listFutureAddress);

    _pause();
  }

  /// @notice implicitly callable only once (due to the cap), used for putting 60% of the tokens into the reserve multisig
  function mintReserve(address reserve) external onlyOwner {
    _mint(reserve, (60 * cap()) / 100);
  }

  /// @dev the transfer function transfers the eth from the fair launch to the team wallet (which is a simple wallet)
  function endSale() external onlyOwner {
    _pause();
    _saleEnded = true;

    uint256 _claimableSupply = (3 * cap()) / 100;
    for (uint256 i = 0; i < _investors.values.length; i++) {
      address investor = _investors.values[i];
      uint256 share = (_claimableSupply * investments[investor]) / totalStake;
      _investors.investments[investor].share = share;
    }

    payable(msg.sender).transfer(address(this).balance);
  }

  /// @notice start fair launch sale, callable only once, stores timestamp to be used in team token logic
  /// @dev the sale will last cca 7 days, but we will be closing and opening it manually to account for unforseen issues
  function startSale() external onlyOwner {
    require(!_saleEnded, "saleEnded");
    require(saleStartedTS == 0, "saleAlreadyStarted");
    saleStartedTS = block.timestamp;
    _unpause();
  }

  /// @notice allows investment into the fair launch while it is running
  /// @dev the sale will last cca 7 days, but we will be closing and opening it manually to account for unforseen issues
  /// @param investor the account for which the money is being invested
  /// @param referer there is a referal system in place, granting 5% of the sale value for investors that bring other investors (using a custom referal link generated after each investment)
  function invest(address investor, address payable referer) public payable whenNotPaused {
    require(_investors.investments[referer].isIn || referer == address(0), "refererNotInvested");
    uint256 stake = msg.value;

    investments[investor] += stake;
    totalStake += stake;

    if (!_investors.investments[investor].isIn) {
      _investors.values.push(investor);
      _investors.investments[investor].isIn = true;
    }

    if (referer != address(0)) referer.transfer(stake / 20);

    emit Investment(investor, stake, block.timestamp);
  }

  /// @notice allows claiming the first portion of the tokens bought during the fair sale
  /// @dev everything is vested through onchain
  function claimShares() external {
    require(_saleEnded, "saleOngoing");
    require(_investors.investments[msg.sender].isIn, "notInvestor");
    require(_investors.investments[msg.sender].claimed < 10, "fullInvestmentClaimed");
    uint256 currentTS = block.timestamp;
    // diff = 1 + months - claimedMonths
    uint256 diff = 1 + ((currentTS - saleStartedTS) / VESTING_PERIOD) - _investors.investments[msg.sender].claimed;
    require(diff > 0, "alreadyClaimedAllowance");

    uint256 claimable;
    if (diff > (10 - _investors.investments[msg.sender].claimed)) {
      claimable = 10 - _investors.investments[msg.sender].claimed;
    } else {
      claimable = diff;
    }

    _investors.investments[msg.sender].claimed += claimable;
    _mint(msg.sender, claimable * _investors.investments[msg.sender].share);
  }

  /// @notice burn function to be used when converting futures into proper LIST tokens
  /// @dev the transfer function transfers the eth from the fair launch to the team wallet (which is a simple wallet)
  function claimFutures(uint256 amount) external {
    require(_saleEnded, "saleNotDone");
    uint256 currentTS = block.timestamp;
    uint256 diff = (currentTS - saleStartedTS) / VESTING_PERIOD_TEAM;
    require(diff != 0, "notEnoughTimePassed");

    address claimer = _msgSender();
    // burn LISTFuture when claiming LIST
    listFuture.burnFrom(claimer, amount);
    _mint(claimer, amount);
  }
}
