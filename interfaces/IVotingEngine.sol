// SPDX-License-Identifier: WTFPL

pragma solidity 0.8.11;

interface IVotingEngine {
    struct Token {
        address user;
        uint256 amount;
    }

    event Deposited(address indexed user, uint256 amount);
    event PreparedWithdrawal(address indexed user, uint256 amount);

    event VoteProposed(uint256 indexed proposal, uint256 rewards);
    event VoteResolved(uint256 indexed proposal, uint256 rewards);

    //User facing deposit and withdraw functions, deposit emits a Deposited event
    function deposit(uint256 amount) external returns (uint256 balance);
    //withdraw requires funds to be ready for withdrawal, doesn't emit
    function withdraw(uint256 amount) external returns (uint256 balance);

    //Admin prepare withdrawals for addresses, should be ran on a daily basis
    function prepareWithdrawals(Token[] memory tokens) external;

    //User facing proposeVote with a reward amount (minimum exists)
    function proposeVote(uint256 rewardAmount) external returns (uint256 id);
    //Admin vote resolution, resolves the vote to an IPFS hash with the votes (explained elsewhere)
    function resolveVote(uint256 id, string memory ipfs) external;
    //Returns the ipfs hash associated with a vote's results.
    function getVoteState(uint256 id) external view returns (string memory ipfs);
}