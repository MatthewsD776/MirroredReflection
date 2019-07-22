const SuggestionBoard = artifacts.require("./SuggestionBoard.sol");
const Suggestion = artifacts.require("./Suggestion.sol");
const truffleAssert = require('truffle-assertions');

contract("Suggestion Board", accounts => {
    var board;
    var suggestions;

    before(async() => {
        board = await SuggestionBoard.deployed();

        await board.createSuggestion("Test Name", "Test Desc", {from: accounts[0]});

        suggestions = await board.getInProgressSuggestions({from: accounts[0]});
    });

    it("Should create one suggestion", async() => {
        assert.equal(suggestions.length, 1, "New suggestion was not added");
    });

    it("Should be able to get details of inprogress job", async() => {
        var suggestion = await Suggestion.at(suggestions[0]);

        var name = await suggestion.name();

        assert.equal(name, "Test Name", "Name should be retirevable")
    });

    it("Should be able to upvote a suggestion", async() => {
        var suggestion = await Suggestion.at(suggestions[0]);

        var countBefore = await suggestion.voteCount();
        var b = new web3.utils.BN(countBefore);

        await board.upVote(suggestions[0], {from: accounts[0]});

        var countAfter = await suggestion.voteCount();
        var a = new web3.utils.BN(countAfter);
        assert.equal(b.add(new web3.utils.BN('1')).toString(), a.toString(), "Vote was not counted");
    });
});