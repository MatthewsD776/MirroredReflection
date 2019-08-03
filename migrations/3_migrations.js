const SuggestionBoard = artifacts.require("SuggestionBoard");

module.exports = function(deployer) {
  deployer.deploy(SuggestionBoard);
};
