pragma solidity ^0.5.8;

import "./Suggestion.sol";

contract SuggestionBoard {
    Suggestion[] suggestions;

    event suggestionCreated();
    event suggestionUpvoted(address _suggestion, string _name, int256 _voteCount);
    event suggestionDownVoted(address _suggestion, string _name, int256 _voteCount);
    event suggestionClosed(address _suggestion, string _name, int256 _finalVoteCount);

    function createSuggestion(string memory _name, string memory _desc) public {
        Suggestion suggestion = new Suggestion(_name, _desc, msg.sender);
        suggestions.push(suggestion);
        emit suggestionCreated();
    }

    function upVote(address _suggestion) public {
        Suggestion suggestion = Suggestion(_suggestion);
        suggestion.upVote(msg.sender);
        emit suggestionUpvoted(_suggestion, suggestion.name(), suggestion.voteCount());
    }

    function downVote(address _suggestion) public {
        Suggestion suggestion = Suggestion(_suggestion);
        suggestion.downVote(msg.sender);
        emit suggestionDownVoted(_suggestion, suggestion.name(), suggestion.voteCount());
    }

    function close(address _suggestion) public {
        Suggestion suggestion = Suggestion(_suggestion);
        suggestion.close(msg.sender);
        emit suggestionClosed(_suggestion, suggestion.name(), suggestion.voteCount());
    }

}