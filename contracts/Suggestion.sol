pragma solidity ^0.5.8;

import "./Ownable.sol";

contract Suggestion is Ownable{
    string public name;
    string public suggestion;
    int256 public voteCount;
    bool public open;

    mapping(address => bool) voted;

    event upVoted();
    event downVoted();
    event closed();

    constructor(string memory _name, string memory _suggestion) public {
        open = true;
        name = _name;
        suggestion = _suggestion;
    }

    modifier canVote() {
        require(open, "Suggestion has ended");
        require(!hasVoted(), "Already Voted");
        _;
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
        open = false;
        address payable owner = msg.sender;
        owner.transfer(address(this).balance);
    }
}