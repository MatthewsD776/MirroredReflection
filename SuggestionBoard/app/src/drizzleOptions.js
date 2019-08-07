import SuggestionBoard from "./contracts/SuggestionBoard.json";

const options = {
  web3: {
    block: false,
    fallback: {
      type: "ws",
      url: "ws://127.0.0.1:8545",
    },
  },
  contracts: [SuggestionBoard],
  events: {
    SuggestionBoard: ["suggestionCreated"],
  },
  polls: {
    accounts: 1500,
  },
};

export default options;
