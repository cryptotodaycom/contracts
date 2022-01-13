// SPDX-License-Identifier: WTFPL

pragma solidity 0.8.2;

interface ICommon20ProxyInitialize {
    function initialize(string calldata name, string calldata symbol, uint256 decimals, uint256 amount, address owner, uint256 cap) external;
}
