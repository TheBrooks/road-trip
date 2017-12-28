import React, { Component } from 'react';
import './App.css';
import LocationSearchBox from './Components/LocationSearchBox/LocationSearchBox.js';
import DestinationList from './Components/DestinationList/DestinationList.js';
import DestinationMap from './Components/DestinationMap/DestinationMap.js';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      destinations: []
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(newDestination) {
    this.setState((prevState, props) => {
      return {destinations: [...prevState.destinations, newDestination]}
    });
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-title"> Road Trip</h1>
        <LocationSearchBox onSubmit={this.onSubmit} />
        <div id="DestinationContainer">
          <DestinationList destinations={this.state.destinations}/>
          <DestinationMap />
        </div>
      </div>
    );
  }
}

export default App;
