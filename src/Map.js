import React, {Component} from 'react';
import {Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react';

const mapStyles = {
  height: '100%',
};

const coords = {
  lat: 37.78,
  lng: -122.44
}

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  }

  onMarkerClick = (props, marker, e) => {
    console.log('props', props);
    console.log('marker', marker);
    this.setState({
      showingInfoWindow: true,
      selectedPlace: props,
      activeMarker: marker
    });
  }

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
      });
    }
  }

  render() {
    const markerList = this.props.quakeData.map((quake, index) => {
      let lat = quake.geometry.coordinates[1];
      let long = quake.geometry.coordinates[0];
      return (
        <Marker
          position={{lat: lat, lng: long}} 
          icon={{url: "images/epicenter.png", scaledSize: new this.props.google.maps.Size(30,30)}}
          onClick={this.onMarkerClick}
          name={quake.properties.title}
          >
        </Marker> 
      )
    })

    return (
      <Map google={this.props.google}
        zoom={1.1}
        style={mapStyles}
        containerStyle={{ height: '55vh' }}
        initialCenter={coords}>

        {markerList}

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            {this.state.activeMarker.name}
          </div>
        </InfoWindow>

      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg'
})(MapContainer);