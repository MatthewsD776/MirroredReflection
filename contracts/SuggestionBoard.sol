pragma solidity ^0.5.8;

import "./Suggestion.sol";

contract SuggestionBoard {
    Suggestion[] private inProgressSuggestions;
    Suggestion[] private closedSuggestions;

    event suggestionCreated();
    event suggestionUpvoted();

    function createSuggestion(string memory _name, string memory _desc) public {
        Suggestion suggestion = new Suggestion(_name, _desc, msg.sender);
        inProgressSuggestions.push(suggestion);
        emit suggestionCreated();
    }

    function upVote(address _suggestion) public {
        Suggestion suggestion = Suggestion(_suggestion);
        suggestion.upVote(msg.sender);
        emit suggestionUpvoted();
    }

    function downVote() public {

    }

    function close() public {

    }

    function getInProgressSuggestions() public view returns(Suggestion[] memory){
        return inProgressSuggestions;
    }

}