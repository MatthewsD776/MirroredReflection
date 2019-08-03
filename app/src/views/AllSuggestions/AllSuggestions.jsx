import React from "react";

import {
    AccountData,
    ContractData,
    ContractForm,
  } from "drizzle-react-components";

class AllSuggestions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
      
  }

  render() {
    return (
      <div>
          <h2>All Suggestions</h2>
        <strong>Stored Suggestions: </strong>
        <ContractData contract="SuggestionBoard" method="allSuggestions"/>
      </div>
    );
  }
}

export default AllSuggestions;
