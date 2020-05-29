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
      let title = quake.properties.place;
      return (<Marker position={{lat: lat, lng: long}} title={{title}} />)
    })

    return (
      <Map google={this.props.google}
        zoom={1}
        style={mapStyles}
        containerStyle={{ height: '55%' }}
        initialCenter={coords}>

        {markerList}

      </Map>
    )
  }
}

// class Map extends Component {
//   render() {
//     return (
//       <div>map</div>
//     )
//   }
// }

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg'
})(MapContainer);