import React, {Component} from 'react';

class ButtonContainer extends Component {
  render() {
    return (
      <div className="buttonContainer">
        <button onClick={() => this.props.changeDataSet("sig30")} >Significant & 30 Days</button>
        <button onClick={() => this.props.changeDataSet("m4.5_30")}>M 4.5+ & 30 Days</button>
        <button onClick={() => this.props.changeDataSet("sig7")}>Significant & 7 Days</button>
        <button onClick={() => this.props.changeDataSet("m4.5_7")}>M 4.5+ & 7 Days</button>
      </div>
    )
  }
}

export default ButtonContainer;