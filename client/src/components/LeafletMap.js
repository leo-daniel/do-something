import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import './leafletmap.css';
import L from 'leaflet';

import defaultIconURL from './vol-icon.png';

const myIcon = L.icon({
  iconUrl: defaultIconURL,
  iconSize: [40, 40]
});

export default class LeafletMap extends Component {
  state = {
    lat: 39.809860,
    lng: -98.555183,
    zoom: 4,
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <Map className='map' center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={myIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    )
  }
}

// We are going to replace the osm url with a custom map tile layer, passing the token through the URL.
// > Make route that makes mapbox call
// > set up 