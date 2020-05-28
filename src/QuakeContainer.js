import React, {Component} from 'react'
import Title from './Title'

class QuakeContainer extends Component {
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
    // map earthquake array info to the Title component
    const quakeList = this.state.quakeData.map((quake, index) => (
      <Title singleQuakeData={quake} key={index} />
    ))

    return (
      <div>
        <h3>Earthquakes from the Past Month</h3>
        <div id="info">
          {quakeList}
        </div>
      </div>
    )
  }
}

export default QuakeContainer