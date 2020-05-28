import React, { Component } from 'react';
import QuakeContainer from './QuakeContainer'
import Map from './Map'

class App extends Component {


  render() {
    return (
      <div className="app">
        <div className="mapContainer">
          <Map />
        </div>
        <div className="quakeContainer">
          {/* <h1>Earthquakes from the past week: </h1> */}
          <QuakeContainer />
        </div>
      </div>
    );
  }
}

export default App;
