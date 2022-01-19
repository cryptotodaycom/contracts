pragma solidity 0.8.11;

interface ICT {

    //User facing function to invest in the fair launch
    function invest(address investor) external payable;

    //Function to exchange dummy CT for real CT
    function claim(uint256 amount) external;
}