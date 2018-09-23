import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import './leafletmap.css';
import L from 'leaflet';
import defaultIconURL from './vol-icon.png';

const myIcon = L.icon({
  iconUrl: defaultIconURL,
  iconSize: [40, 40],
  popupAnchor:[5,-12]
});

export default class LeafletMap extends Component {
  state = {
    lat: 39.809860,
    lng: -98.555183,
    zoom: 4,
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    //const eventMarkers = [] // GET CALL HERE
    return (
      <Map className='map' center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={myIcon}>
          <Popup >
            <div><h1><strong>Send Thots and Prayers</strong></h1> <hr/>
            Gather in the center of the U.S. to volunteer. <br />
             
            (Let's put event title ; description; date ; organizer ; time ; location ; contact?. Use CSS to customize look and feel of this targeting .mypopup.leaflet-popup-content-wrapper)
            </div>
          </Popup>
        </Marker>
      </Map>
    )
  }
}

// We are going to replace the osm url with a custom map tile layer, passing the token through the URL.
// > Make route that makes mapbox call
// > set up 