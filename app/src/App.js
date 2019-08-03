import React, { Component } from "react";
import { DrizzleProvider } from "drizzle-react";
import {LoadingContainer} from "drizzle-react-components";
import drizzleOptions from "./drizzleOptions";
import Dashboard from "./views/Dashboard/Dashboard";

class App extends Component {
  render() {
    return (
      <DrizzleProvider options={drizzleOptions}>
        <LoadingContainer>
          <Dashboard/>
        </LoadingContainer>
      </DrizzleProvider>
    );
  }
}

export default App;
