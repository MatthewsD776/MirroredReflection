var SimpleStorage = artifacts.require("./SimpleStorage.sol");
var Suggestion = artifacts.require("./Suggestion.sol");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(Suggestion);
};
