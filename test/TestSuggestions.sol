pragma solidity ^0.5.8;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Suggestion.sol";

contract TestSuggesting {
    Suggestion sug;

    function beforeEach() public {
        sug = new Suggestion();
    }

    function testCanOnlyVoteOnceOnlyUpVotes() public {
      sug.upVote();
      sug.upVote();

      Assert.equal(sug.voteCount(), 1, "Only one vote per user");
  }

  function testCanOnlyVoteOnceOnlyDownVotes() public {
      sug.downVote();
      sug.downVote();

      Assert.equal(sug.voteCount(), -1, "Only one vote per user");
  }

  function testCanOnlyVoteOnceOnlyBoth() public {
      sug.upVote();
      sug.downVote();

      Assert.equal(sug.voteCount(), 1, "Only one vote per user");
  }

  function testCanOnlyVoteOnceOnlyBoth2() public {
      sug.downVote();
      sug.upVote();

      Assert.equal(sug.voteCount(), -1, "Only one vote per user");
  }

}