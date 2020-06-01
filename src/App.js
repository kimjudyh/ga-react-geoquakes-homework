import React, { Component } from 'react';
import QuakeContainer from './QuakeContainer'
import MapContainer from './Map'
import ButtonContainer from './Button'

class App extends Component {
  state = {
    quakeData: [],
    significant30DaysData: [],
    all30DaysData: [],
    mag4_5_30DaysData: [],
    mag2_5_30DaysData: [],
    significant7DaysData: [],
    mag4_5_7DaysData: [],
    all7DaysData: [],
    dataSetTitle: "Significant Earthquakes in the Last 30 Days"
  }

  componentDidMount() {
    // significant earthquakes in the last 30 days
    fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson')
      .then(response => response.json())
      .then(quakeData => {
        this.setState({
          // default data set is significant quakes past 30 days
          quakeData: quakeData.features,
          significant30DaysData: quakeData.features
        })
        console.log(this.state.quakeData)
      })
      .catch(err => console.log('30', err))    

    // magnitude 4.5+ earthquakes in the last 30 days
    fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.geojson')
      .then(response => response.json())
      .then(quakeData => {
        this.setState({
          mag4_5_30DaysData: quakeData.features
        })
      })
      .catch(err => console.log('30', err))    
      
    // magnitude 2.5+ earthquakes in the last 30 days
    fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_month.geojson')
      .then(response => response.json())
      .then(quakeData => {
        this.setState({
          mag2_5_30DaysData: quakeData.features
        })
      })
      .catch(err => console.log('30', err))

    // all earthquakes in the last 30 days
    fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson')
      .then(response => response.json())
      .then(quakeData => {
        this.setState({
          all30DaysData: quakeData.features
        })
      })
      .catch(err => console.log('30', err))

    // significant earthquakes in the last 7 days
    fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson')
      .then(response => response.json())
      .then(quakeData => {
        this.setState({
          significant7DaysData: quakeData.features
        })
      })
      .catch(err => console.log(err))

    // significant earthquakes in the last 7 days
    fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson')
      .then(response => response.json())
      .then(quakeData => {
        this.setState({
          mag4_5_7DaysData: quakeData.features
        })
      })
      .catch(err => console.log(err))

    // all earthquakes in the last 7 days
    fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson')
      .then(response => response.json())
      .then(quakeData => {
        this.setState({
          all7DaysData: quakeData.features
        })
      })
      .catch(err => console.log(err))
    }
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.quakeData !== this.state.quakeData) {

  //   }

  // }

  changeDataSet = (buttonValue) => {
    if (buttonValue === 'sig30') {
      this.setState({
        quakeData: this.state.significant30DaysData,
        dataSetTitle: "Significant Earthquakes in the Last 30 Days"
      })
      console.log('sig & 30 button clicked');
    }
    else if (buttonValue === 'all30') {
      this.setState({
        quakeData:  this.state.all30DaysData,
        dataSetTitle: "All Earthquakes in the Last 30 Days"
      })
      console.log('all & 30 button clicked');
    }
    else if (buttonValue === 'm4.5_30') {
      this.setState({
        quakeData: this.state.mag4_5_30DaysData,
        dataSetTitle: "Magnitude 4.5+ Earthquakes in the Last 30 Days"
      })
    }
    else if (buttonValue === 'm2.5_30') {
      this.setState({
        quakeData: this.state.mag2_5_30DaysData,
        dataSetTitle: "Magnitude 2.5+ Earthquakes in the Last 30 Days"
      })
    }
    else if (buttonValue === 'sig7') {
      this.setState({
        quakeData: this.state.significant7DaysData,
        dataSetTitle: "Significant Earthquakes in the Last 7 Days"
      })
    }
    else if (buttonValue === 'm4.5_7') {
      this.setState({
        quakeData: this.state.mag4_5_7DaysData,
        dataSetTitle: "Magnitude 4.5+ Earthquakes in the Last 7 Days"
      })
    }
    else if (buttonValue === 'all7') {
      this.setState({
        quakeData: this.state.all7DaysData,
        dataSetTitle: "All Earthquakes in the Last 7 Days"
      })
    }
  }

  render() {
    return (
      <div className="app">
        <ButtonContainer changeDataSet={this.changeDataSet}/>
        <div className="mapContainer">
          <MapContainer 
            quakeData={this.state.quakeData}
          />
        </div>
        <div className="quakeContainer">
          <QuakeContainer 
            dataSetTitle={this.state.dataSetTitle}
            quakeData={this.state.quakeData}
          />
        </div>
      </div>
    );
  }
}

export default App;
