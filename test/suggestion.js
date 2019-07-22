const Suggestion = artifacts.require("./Suggestion.sol");
const truffleAssert = require('truffle-assertions');


contract("Suggestion", accounts => {
    var instance;

    beforeEach(async() => {
        var suggestion = await Suggestion.new("Test", "test", accounts[0], {
            from: accounts[0]
        });
        instance = await Suggestion.at(suggestion.address);
    });

    it("should be able to send ether to suggestion", async () => {
        await instance.upVote(accounts[0],{
            from: accounts[0],
            value: 100
        });

        var contractValue = await web3.eth.getBalance(instance.address);

        assert.equal(contractValue, 100, "Value was not added");
    });

    it("should drain ether when closed", async() => {
        await instance.upVote(accounts[0],{
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
        await instance.upVote(accounts[0],{
            from: accounts[0],
            value: 100
        });

        await truffleAssert.reverts(
            instance.upVote(accounts[0],{from: accounts[0]}), 
            "Already Voted"
        );
    });

    it("Should not be able to upvote then down vote", async () => {
        await instance.upVote(accounts[0],{
            from: accounts[0]
        });

        await truffleAssert.reverts(
            instance.downVote(accounts[0],{from: accounts[0]}), 
            "Already Voted"
        );
    });

    it("Should not be able to downvote then up vote", async () =>{
        await instance.downVote(accounts[0],{
            from: accounts[0]
        });

        await truffleAssert.reverts(
            instance.upVote(accounts[0],{from:accounts[0]}),
            "Already Voted"
        );
    });

    it("Cannot vote on an ended contract", async () => {
        await instance.close({from : accounts[0]});

        await truffleAssert.reverts(
            instance.upVote(accounts[0],{from:accounts[0]}),
            "Suggestion has ended"
        );
    });

    it("The owner can close a suggestion", async () => {
        await instance.close({from : accounts[0]});

        var alive = await instance.isOpen();

        assert.equal(alive, false, "Owner should be able to close suggestion");
    });

    it("a random cant close a suggestion", async() => {
        await truffleAssert.reverts(
            instance.close({from: accounts[1]}),
            "Ownable: caller is not the owner"
        );
    });

    it("Should send ether to the creator when closed", async() => {
        var value = web3.utils.toWei('10', 'ether');

        await instance.upVote(accounts[0],{from: accounts[0], value: value});

        var balanceBefore = await web3.eth.getBalance(accounts[0]);

        await instance.close({from: accounts[0]});

        var balanceAfter = await web3.eth.getBalance(accounts[0]);

        assert.equal((balanceBefore < balanceAfter), true, "Ether was not sent to the creator");
    });
});