import React, { Component } from 'react';
import QuakeContainer from './QuakeContainer'
import MapContainer from './Map'

class App extends Component {
  state = {
    quakeData: []
  }

  componentDidMount() {
    fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson')
      .then(response => response.json())
      .then(quakeData => {
        this.setState({
          quakeData: quakeData.features
        })
        console.log(this.state.quakeData)
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="app">
        <div className="mapContainer">
          <MapContainer 
            quakeData={this.state.quakeData}
          />
        </div>
        <div className="quakeContainer">
          <QuakeContainer 
            quakeData={this.state.quakeData}
          />
        </div>
      </div>
    );
  }
}

export default App;
