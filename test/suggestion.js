const Suggestion = artifacts.require("./Suggestion.sol");

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

        await instance.upVote({from: accounts[1]});
        contractValue = await web3.eth.getBalance(instance.address);

        assert.equal(contractValue, 0, "Value was not sent to owner");
        
    });
});