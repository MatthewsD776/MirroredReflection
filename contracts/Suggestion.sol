pragma solidity ^0.5.8;

import "./Ownable.sol";

contract Suggestion is Ownable{
    string public name;
    string public suggestion;
    int256 public voteCount;

    mapping(address => bool) voted;

    event upVoted();
    event downVoted();
    event ended();

    constructor() public {
        //suggestion = _suggestion;
    }

    modifier canVote() {
        if(!hasVoted() && !isDead()){
            _;
        }
    }

    function isDead() private view returns (bool) {
        return owner() == address(0);
    }

    function hasVoted() private view returns (bool){
        return voted[msg.sender];
    }

    function upVote() public payable canVote {
        voted[msg.sender] = true;
        voteCount++;
        emit upVoted();
    }

    function downVote() public canVote {
        voted[msg.sender] = true;
        voteCount--;
        emit downVoted();
    }

    function donationValue() public view returns(uint256) {
        return address(this).balance;
    }

    function close() public onlyOwner {
        selfdestruct(msg.sender);
        emit ended();
    }
}