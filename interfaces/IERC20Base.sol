// SPDX-License-Identifier: WTFPL

pragma solidity 0.8.11;

import '@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol';
import '@openzeppelin/contracts-upgradeable/token/ERC20/extensions/IERC20MetadataUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/access/AccessControlEnumerableUpgradeable.sol';
import "../interfaces/IERC2020ProxyInitialize.sol";

interface IERC20Base is IERC20Upgradeable, IERC20MetadataUpgradeable, ICommon20ProxyInitialize, IAccessControlUpgradeable, IERC165Upgradeable {

    /**
     * @dev Creates `amount` new tokens for `to`.
     *
     * See {ERC20-_mint}.
     *
     * Requirements:
     *
     * - the caller must have the `MINTER_ROLE`.
     */
    function mint(address to, uint256 amount) external;

    /**
     * @dev Pauses all token transfers.
     *
     * See {ERC20Pausable} and {Pausable-_pause}.
     *
     * Requirements:
     *
     * - the caller must have the `PAUSER_ROLE`.
     */
    function pause() external;

    /**
     * @dev Unpauses all token transfers.
     *
     * See {ERC20Pausable} and {Pausable-_unpause}.
     *
     * Requirements:
     *
     * - the caller must have the `PAUSER_ROLE`.
     */
    function unpause() external;

    /**
     * @dev Returns the cap on the token's total supply.
     */
    function cap() external returns (uint256);

    /**
     * @dev Returns weather cap status is set
     */
    function capStatus() external returns (bool);
}
