pragma solidity ^0.5.8;

import "./Suggestion.sol";

contract SuggestionBoard {
    Suggestion[] suggestions;
    string public name;

    event suggestionCreated(address _suggestion, string _name, string _desc);
    event suggestionUpVoted(address _suggestion, string _name, int256 _voteCount);
    event suggestionDownVoted(address _suggestion, string _name, int256 _voteCount);
    event suggestionClosed(address _suggestion, string _name, int256 _finalVoteCount);

    constructor() public {
        name = "Board";
    }

    function allSuggestions() public view returns(Suggestion[] memory){
        return suggestions;
    }

    function setName(string memory _name) public {
        name = _name;
    }

    function createSuggestion(string memory _name, string memory _desc) public {
        Suggestion suggestion = new Suggestion(_name, _desc, msg.sender);
        suggestions.push(suggestion);
        emit suggestionCreated(address(suggestion), suggestion.name(), suggestion.suggestion());
    }

    function upVote(address _suggestion) public payable{
        Suggestion suggestion = Suggestion(_suggestion);
        suggestion.upVote.value(msg.value)(msg.sender);
        emit suggestionUpVoted(_suggestion, suggestion.name(), suggestion.totalVotes());
    }

    function downVote(address _suggestion) public {
        Suggestion suggestion = Suggestion(_suggestion);
        suggestion.downVote(msg.sender);
        emit suggestionDownVoted(_suggestion, suggestion.name(), suggestion.totalVotes());
    }

    function close(address _suggestion) public {
        Suggestion suggestion = Suggestion(_suggestion);
        suggestion.close(msg.sender);
        emit suggestionClosed(_suggestion, suggestion.name(), suggestion.totalVotes());
    }

}