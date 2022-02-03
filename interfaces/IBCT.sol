//SPDX-License-Identifier: WTFPL

pragma solidity 0.8.11;

interface ILIST {
  //User facing function to invest in the fair launch
  function invest(address investor) external payable;

  //Function to exchange futures LIST for real LIST
  function claim(uint256 amount) external;
}
