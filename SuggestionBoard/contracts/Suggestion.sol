pragma solidity ^0.5.8;

import "../node_modules/openzeppelin-solidity/contracts/ownership/Ownable.sol";

contract Suggestion is Ownable{
    string public name;
    string public suggestion;
    uint256 public upVotes;
    uint256 public downVotes;
    bool public isOpen;
    address payable public creator;

    mapping(address => bool) voted;

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

    function upVote(address _voter) public payable onlyOwner() canVote(_voter){
        voted[_voter] = true;
        upVotes++;
    }

    function downVote(address _voter) public onlyOwner() canVote(_voter) {
        voted[_voter] = true;
        downVotes++;
    }

    function close(address _creator) public onlyOwner() canClose(_creator) {
        isOpen = false;
        creator.transfer(address(this).balance);
    }

    function getAllData() public view returns(
        string memory _name, string memory _desc, uint256 _up, uint256 _down, int256 _total, address _creator, bool _open
    ){
        return(name, suggestion, upVotes, downVotes, totalVotes(), creator, isOpen);
    }

    function totalVotes() public view returns (int256){
        return int256(upVotes - downVotes);
    }
}