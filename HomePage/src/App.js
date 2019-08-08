import React from 'react';
import './App.css';
import SingleLineGridList from './Components/SingleLineImages';
import Arrow from "@material-ui/icons/ArrowDownward";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Coming Soon to a Screen near you!</h2>
          <p>Enjoy some cool pictures!</p>
          <Arrow/>
        </header>
        <div className="App-intro">
          <SingleLineGridList/>
        </div>
      </div>
    );
  }

}

export default App;
