//SPDX-License-Identifier: MIT

pragma solidity 0.8.11;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Capped.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

// TODO: should it be capped?
contract BCT is ERC20Capped, Ownable, Pausable {

  struct AddressSet {
    address[] values;
    mapping(address => bool) isIn;
  }

  AddressSet internal _investors;

  mapping(address => uint256) public investments;
  uint256 public totalStake;

  event Investment(address indexed investor, uint256 value);

  uint256 public immutable contractCreatedTS;

  // public or private?
  IERC20 public immutable bctDummy;

  constructor(
    uint256 cap,
    address bctDummyAddress
  ) ERC20("Blockchain Crypto Today", "BCT") ERC20Capped(cap) {
    contractCreatedTS = block.timestamp;
    bctDummy = IERC20(bctDummyAddress);

    uint256 totalSupply = cap - IERC20(bctDummyAddress).totalSupply(); // TODO: check if true
    _mint(address(this), totalSupply);

    _pause();
  }

  // end sale
  function pause() external onlyOwner {
    _pause();

    uint256 _totalSupply = totalSupply();
    for (uint256 i = 0; i < _investors.values.length; i++) {
      address investor = _investors.values[i];
      uint256 share = (_totalSupply * investments[investor]) / totalStake;
      transfer(investor, share);
    }
  }

  // TODO: should we allow to unpause (activate sale) only once? automatically shuts down after 7 days
  function unpause() external onlyOwner {
    _unpause();
  }

  //  TODO: should we set timeout for sale? Sale will last 7 days, from the point its started
  function invest(address investor) external payable whenNotPaused {
    uint256 stake = msg.value;

    investments[investor] += stake;
    totalStake += stake;

    if (!_investors.isIn[investor]) {
      _investors.values.push(investor);
      _investors.isIn[investor] = true;
    }

    emit Investment(investor, stake);
  }

  function claim(uint256 amount) external {
    uint256 currentTS = block.timestamp;
    uint256 diff = (currentTS - contractCreatedTS) / 60 / 60 / 24;
    require(diff > 365, "Allow claiming after one year");

    address claimer = _msgSender();
    bctDummy.transferFrom(claimer, address(this), amount);
    _mint(claimer, amount);
  }
}
