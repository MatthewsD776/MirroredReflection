const SuggestionBoard = artifacts.require("./SuggestionBoard.sol");
const Suggestion = artifacts.require("./Suggestion.sol");
const truffleAssert = require('truffle-assertions');

contract("Suggestion Board", accounts => {

    before(async() => {
    });

    it("Should be able to create one suggestion", async() => {
        
    });

    it("Should be able to get the address of all jobs", async() => {

    });

    it("Should be able to upvote a suggestion", async() => {

    });

    it("Should not be able to interact with a suggestion that doesnt exist", async() => {

    });

    it("Should be able to downvote a suggestion", async() => {

    });

    it("Should be able to close a suggestion", async() => {

    });

    it("Should not be able to close a suggestion if not the creator", async() => {

    });

    it("Should not be able to upvote a suggestion if not through the board", async() => {

    });

    it("Should be able to downvote a suggestion if not through the board", async() => {

    });

    it("Should be able to close a suggestion if not through the board", async() => {

    });
});