//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Capped.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

contract CTDummy is ERC20Capped, Ownable, Pausable {
  struct Balance {
    address account;
    uint256 amount;
  }

  constructor(
    string memory name,
    string memory symbol,
    uint256 cap,
    Balance[] memory balances
  ) ERC20(name, symbol) ERC20Capped(cap) {
    for (uint256 i = 0; i < balances.length; i++) {
      _mint(balances[i].account, balances[i].amount);
    }
  }
}
