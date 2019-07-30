pragma solidity ^0.5.8;

import "./Ownable.sol";

contract Suggestion is Ownable{
    string public name;
    string public suggestion;
    uint256 public upVotes;
    uint256 public downVotes;
    bool public isOpen;
    address payable public creator;

    mapping(address => bool) voted;

    event upVoted(address _suggestion, string _name, int256 _voteCount);
    event downVoted(address _suggestion, string _name, int256 _voteCount);
    event closed(address _suggestion, string _name, int256 _finalVoteCount);

    constructor(string memory _name, string memory _suggestion, address payable _creator) public {
        isOpen = true;
        name = _name;
        suggestion = _suggestion;
        creator = _creator;
    }

    modifier canVote(address _voter) {
        require(isOwner(), "Call not from Suggestion Board");
        require(isOpen, "Suggestion has ended");
        require(!hasVoted(_voter), "Already Voted");
        _;
    }

    modifier canClose(address _creator){
        require(isOwner(), "Call not from Suggestion Board");
        require((creator == _creator), "Not the creator");
        _;
    }

    function hasVoted(address _voter) private view returns (bool){
        return voted[_voter];
    }

    function upVote(address _voter) public payable canVote(_voter) {
        voted[_voter] = true;
        upVotes++;
        emit upVoted(address(this), name, voteCount());
    }

    function downVote(address _voter) public canVote(_voter) {
        voted[_voter] = true;
        downVotes++;
        emit downVoted(address(this), name, voteCount());
    }

    function close(address _creator) public canClose(_creator) {
        isOpen = false;
        creator.transfer(address(this).balance);
        emit closed(address(this), name, voteCount());
    }

    function voteCount() public view returns (int256){
        return int256(upVotes - downVotes);
    }
}