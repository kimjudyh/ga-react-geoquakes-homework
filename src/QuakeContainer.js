import React, {Component} from 'react'
import Title from './Title'

class QuakeContainer extends Component {

  render() {
    // map earthquake array info to the Title component
    const quakeList = this.props.quakeData.map((quake, index) => (
      <Title singleQuakeData={quake} key={index} />
    ))

    return (
      <div>
        <h3>{this.props.dataSetTitle} ({this.props.quakeData.length})</h3>
        <div id="info">
          {quakeList}
        </div>
      </div>
    )
  }
}

export default QuakeContainer