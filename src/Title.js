import React, {Component} from 'react'

class Title extends Component {
  render() {
    let date = new Date(this.props.singleQuakeData.properties.time);
    let today = new Date();
    console.log('date', date.getTime());
    console.log('today', today.getTime())
    // convert ms to days
    let daysAgo = Math.round((today - date)/ 1000 / 3600 / 24);
    // convert ms to hrs
    let hoursAgo = Math.round((today - date)/ 1000 / 3600);

    let details = `M ${this.props.singleQuakeData.properties.mag} - ${this.props.singleQuakeData.properties.place} / ${date.toUTCString()} / ${daysAgo} days ago / ${hoursAgo} hours ago`

    return(
      <p>{details}</p>
    )
  }
}

export default Title;