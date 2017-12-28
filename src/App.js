import React, { Component } from 'react';
import './App.css';
import LocationSearchBox from './Components/LocationSearchBox/LocationSearchBox.js';
import DestinationList from './Components/DestinationList/DestinationList.js';
import DestinationMap from './Components/DestinationMap/DestinationMap.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title"> Road Trip</h1>
        <LocationSearchBox />
        <div id="DestinationContainer">
          <DestinationList />
          <DestinationMap />
        </div>
      </div>
    );
  }
}

export default App;
