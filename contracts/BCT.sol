//SPDX-License-Identifier: MIT

pragma solidity 0.8.11;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Capped.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

// TODO: should it be capped?
contract BCT is ERC20Capped, Ownable, Pausable {
  struct Claim {
    bool isIn;
    bool claimed;
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

  event Investment(address indexed investor, uint256 value, uint256 timestamp);

  uint256 public saleStartedTS;
  bool internal _saleEnded = false;

  IERC20 public immutable bctFuture;

  constructor(uint256 cap, address bctFutureAddress) ERC20("Blockchain Crypto Today", "BCT") ERC20Capped(cap) {
    saleStartedTS = block.timestamp;
    bctFuture = IERC20(bctFutureAddress);

    uint256 totalSupply = cap - IERC20(bctFutureAddress).totalSupply(); // TODO: check if true
    _mint(address(this), totalSupply);

    _pause();
  }

  // end sale
  function pause() external onlyOwner {
    _pause();

    uint256 _claimableSupply = (3 * totalSupply()) / 100;
    for (uint256 i = 0; i < _investors.values.length; i++) {
      address investor = _investors.values[i];
      uint256 share = (_claimableSupply * investments[investor]) / totalStake;
      _investors.investments[investor].share = share;
    }
  }

  // TODO: should we allow to unpause (activate sale) only once? automatically shuts down after 7 days
  function startSale() external onlyOwner {
    require(!_saleEnded, "saleEnded");
    saleStartedTS = block.timestamp;
    _unpause();
  }

  //  TODO: should we set timeout for sale? Sale will last 7 days, from the point its started
  function invest(address investor) external payable whenNotPaused {
    uint256 stake = msg.value;

    investments[investor] += stake;
    totalStake += stake;

    if (!_investors.investments[investor].isIn) {
      _investors.values.push(investor);
      _investors.investments[investor].isIn = true;
    }

    emit Investment(investor, stake, block.timestamp);
  }

  function claimShares() external {
    require(_saleEnded, "saleOngoing");
    require(_investors.investments[msg.sender].isIn, "notInvestor");
    require(!_investors.investments[msg.sender].claimed, "alreadyClaimed");

    _investors.investments[msg.sender].claimed = true;

    transfer(msg.sender, _investors.investments[msg.sender].share);
  }

  function claimFutures(uint256 amount) external {
    uint256 currentTS = block.timestamp;
    uint256 diff = (currentTS - saleStartedTS) / 60 / 60 / 24;
    require(diff > 365, "Allow claiming after one year");

    address claimer = _msgSender();
    bctFuture.transferFrom(claimer, address(this), amount);
    _mint(claimer, amount);
  }
}
