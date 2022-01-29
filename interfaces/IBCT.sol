//SPDX-License-Identifier: WTFPL

pragma solidity 0.8.11;

interface IBCT {
  //User facing function to invest in the fair launch
  function invest(address investor) external payable;

  //Function to exchange futures BCT for real BCT
  function claim(uint256 amount) external;
}
