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
  render() {
    const markerList = this.props.quakeData.map((quake, index) => {
      let lat = quake.geometry.coordinates[1];
      let long = quake.geometry.coordinates[0];
      return (
        <Marker 
          position={{lat: lat, lng: long}} 
          icon={{url: "images/epicenter.png", scaledSize: new this.props.google.maps.Size(30,30)}}
        />
      )
    })

    return (
      <Map google={this.props.google}
        zoom={1.1}
        style={mapStyles}
        containerStyle={{ height: '45vh' }}
        initialCenter={coords}>

        {markerList}

      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg'
})(MapContainer);