// SPDX-License-Identifier: WTFPL

pragma solidity 0.8.11;

interface IVotingEngine {
    event Deposited(address indexed user, uint256 amount);
    event Withdrawn(address indexed user, uint256 amount);

    event VoteProposed(uint256 indexed proposal, uint256 rewards);
    event VoteResolved(uint256 indexed proposal, uint256 rewards);

    //User facing deposit and withdraw functions, deposit emits a Deposited event
    function deposit(uint256 amount) external returns (uint256 balance);
    //We sign the withdrawal request, moving the gas cost onto the user
    function withdraw(
        uint256 amount,
        uint256 nonce,
        bytes calldata signature
    ) external returns (uint256 balance);

    //User facing proposeVote with a reward amount (minimum exists)
    function proposeVote(uint256 rewardAmount) external returns (uint256 id);
    //Admin vote resolution, resolves the vote to an IPFS hash with the votes (explained elsewhere)
    function resolveVote(uint256 id, string memory ipfs) external;
    //Returns the ipfs hash associated with a vote's results.
    function getVoteState(uint256 id) external view returns (string memory ipfs);
}