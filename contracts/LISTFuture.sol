//SPDX-License-Identifier: MIT

pragma solidity 0.8.12;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Capped.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

contract LISTFuture is ERC20Capped, Ownable, Pausable {
  struct Balance {
    address account;
    uint256 amount;
  }

  constructor(uint256 cap, Balance[] memory balances) ERC20("CryptoTodayCom Futures", "$LISTF") ERC20Capped(cap) {
    for (uint256 i = 0; i < balances.length; i++) {
      _mint(balances[i].account, balances[i].amount);
    }
  }

  function burnFrom(address account, uint256 amount) public virtual {
    uint256 currentAllowance = allowance(account, _msgSender());
    require(currentAllowance >= amount, "ERC20: burn amount exceeds allowance");
    unchecked {
      _approve(account, _msgSender(), currentAllowance - amount);
    }
    _burn(account, amount);
  }
}
