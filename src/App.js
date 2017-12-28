import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title"> Road Trip</h1>
        <div className="App-destination-input">
          <form>
            <input type="text" name="destination" placeHolder="Enter a destination"/ >
          </form>
        </div>
        <div className="rowC">
          <div className="App-destinations-list">
            <ul>
              <li>Austin, TX</li>
              <li>El Paso,TX</li>
              <li>Salt Lake City, UT</li>
              <li>Yosemite National Park, CA</li>
              <li>Fort Bragg, CA</li>
              <li>Crater Lake, OR</li>
              <li>Bend, OR</li>
              <li>Squamish, CAN</li>
              <li>Index, WA</li>
              <li>Bend, OR</li>
              <li>Portland, OR</li>
              <li>Yosemite National Park, CA</li>
              <li>Bishop, CA</li>
              <li>Las Vegas, NV</li>
              <li>Zion National Park, UT</li>
              <li>St. George, UT</li>
              <li>Bear Ears National Monumant, UT</li>
              <li>Denver, CO</li>
              <li>Moab, UT</li>
              <li>Zion National Park, UT</li>
              <li>El Paso, TX</li>
              <li>Austin,TX</li>
            </ul>
          </div>
          <div className="App-map">
            <div className="App-actual-map">
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
