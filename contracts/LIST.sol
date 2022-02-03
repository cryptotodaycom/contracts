//SPDX-License-Identifier: MIT

pragma solidity 0.8.11;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Capped.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

interface ILISTF is IERC20 {
  function burnFrom(address account, uint256 amount) external;
}

// TODO: should it be capped?
contract LIST is ERC20Capped, Ownable, Pausable {
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

  ILISTF public immutable bctFuture;

  constructor(uint256 cap, address bctFutureAddress) ERC20("CryptoTodayCom", "$LIST") ERC20Capped(cap) {
    bctFuture = ILISTF(bctFutureAddress);

    _pause();
  }

  function mintToEngine(address engine) external onlyOwner {
    _mint(engine, (87 * cap()) / 100);
  }

  function endSale() external onlyOwner {
    _pause();
    _saleEnded = true;

    uint256 _claimableSupply = (3 * cap()) / 100;
    for (uint256 i = 0; i < _investors.values.length; i++) {
      address investor = _investors.values[i];
      uint256 share = (_claimableSupply * investments[investor]) / totalStake;
      _investors.investments[investor].share = share;
    }
  }

  function startSale() external onlyOwner {
    require(!_saleEnded, "saleEnded");
    require(saleStartedTS == 0, "saleAlreadyStarted");
    saleStartedTS = block.timestamp;
    _unpause();
  }

  //only referals from those who invested are valid, a link of the from ?referer=abcdef
  //is generated once the investment is made (this referal will be rejected by the smart
  //contract if the investment is for example denied)
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

  function claimShares() external {
    require(_saleEnded, "saleOngoing");
    require(_investors.investments[msg.sender].isIn, "notInvestor");
    require(!_investors.investments[msg.sender].claimed, "alreadyClaimed");

    _investors.investments[msg.sender].claimed = true;

    _mint(msg.sender, _investors.investments[msg.sender].share);
  }

  function claimFutures(uint256 amount) external {
    require(_saleEnded, "saleNotDone");
    uint256 currentTS = block.timestamp;
    uint256 diff = (currentTS - saleStartedTS) / 60 / 60 / 24;
    require(diff > 365, "notEnoughTimePassed");

    address claimer = _msgSender();
    // burn LISTFuture when claiming LIST
    bctFuture.burnFrom(claimer, amount);
    _mint(claimer, amount);
  }
}
