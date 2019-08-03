import { drizzleConnect } from "drizzle-react";
import AllSuggestions from "./AllSuggestions";

const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    SimpleStorage: state.contracts.SimpleStorage,
    TutorialToken: state.contracts.TutorialToken,
    drizzleStatus: state.drizzleStatus,
  };
};

const AllSuggestionsContainer = drizzleConnect(AllSuggestions, mapStateToProps);

export default AllSuggestionsContainer;