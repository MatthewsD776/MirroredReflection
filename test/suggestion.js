const Suggestion = artifacts.require("./Suggestion.sol");
const truffleAssert = require('truffle-assertions');


contract("Suggestion", accounts => {
    var instance;

    beforeEach(async() => {
        var suggestion = await Suggestion.new({
            from: accounts[0]
        });
        instance = await Suggestion.at(suggestion.address);
    });

    it("should be able to send ether to suggestion", async () => {
        await instance.upVote({
            from: accounts[0],
            value: 100
        });

        var contractValue = await web3.eth.getBalance(instance.address);

        assert.equal(contractValue, 100, "Value was not added");
    });

    it("should send ether to owner upon completion", async() => {
        await instance.upVote({
            from: accounts[0],
            value: 100
        });

        //get instance value
        var contractValue = await web3.eth.getBalance(instance.address);

        await instance.close({from: accounts[0]});

        contractValue = await web3.eth.getBalance(instance.address);

        assert.equal(contractValue, 0, "Value was not sent to owner");
        
    });

    it("Should not allow more than 1 vote per person", async () => {
        await instance.upVote({
            from: accounts[0],
            value: 100
        });

        await truffleAssert.reverts(
            instance.upVote({from: accounts[0]}), 
            "Already Voted"
        );
    });

    it("Should not be able to upvote then down vote", async () => {
        await instance.upVote({
            from: accounts[0]
        });

        await truffleAssert.reverts(
            instance.downVote({from: accounts[0]}), 
            "Already Voted"
        );
    });

    it("Should not be able to downvote then up vote", async () =>{
        await instance.downVote({
            from: accounts[0]
        });

        await truffleAssert.reverts(
            instance.upVote({from:accounts[0]}),
            "Already Voted"
        );
    });

    it("Cannot vote on an ended contract", async () => {
        await instance.close({from : accounts[0]});

        await truffleAssert.reverts(
            instance.upVote({from:accounts[0]}),
            "Suggestion has ended"
        );
    });

    it("The owner can close a suggestion", async () => {
        await instance.close({from : accounts[0]});

        var alive = await instance.open();

        assert.equal(alive, false, "Owner should be able to close suggestion");
    });

    it("a random cant close a suggestion", async() => {
        await truffleAssert.reverts(
            instance.close({from: accounts[1]}),
            "Ownable: caller is not the owner"
        );
    });
});