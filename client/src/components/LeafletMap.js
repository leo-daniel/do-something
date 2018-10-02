import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import './leafletmap.css';
import L from 'leaflet';
import defaultIconURL from './vol-icon.svg';
import locationIconURL from './user-location.svg';
import API from '.././utils/API';

const myIcon = L.icon({
  iconUrl: defaultIconURL,
  iconSize: [25, 25],
  popupAnchor:[0,-12]
});

const locationIcon = L.icon({
  iconUrl: locationIconURL,
  iconSize: [100 , 100]
});

export default class LeafletMap extends Component {
  state = {
    zoom: 4,
    events: [],
    haveUsersLocation: false,
    location: {
      lat: 39.809860,
      lng: -98.555183,
    }
  }

  componentDidMount() {
    this.loadEvents();
    this.locateUser();
  }

  locateUser = () => {
    API.getLocation()
    .then(location => {
      this.setState({
        location,
        haveUsersLocation: true,
        zoom: 13
      });
  });
}

  loadEvents = () => {
    API.getEvents()
      .then(res =>
          this.setState({ events: res.data})
      )
      .catch(err => console.log(err));
  };

  render() {
    const position = [this.state.lat, this.state.lng]
    const url = "https://www.google.com/maps/dir/Current+Location/"
    return (
      <Map className='map' center={this.state.location} zoom={this.state.zoom}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://api.mapbox.com/styles/v1/rmerino/cjmnmoghlt6j82spl3x9ti8ou/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoicm1lcmlubyIsImEiOiJjamZpOHFzaGQwM2p5MzNtcXI5c251a2dlIn0.XRFhUVODMYz4Js_gIkO31g"
        />
      {console.log(this.state.events)}
      {console.log(this.state)}
      <Marker key={this.state.zoom} position={this.state.location} icon={locationIcon}></Marker>

      
      {this.state.events.map(event => 
        
        <Marker key={event._id} position={[event.latitude, event.longitude]} icon={myIcon}>
        <Popup >

          <div>
            
            <h3><strong>{event.eventName}</strong></h3>
            <p>{event.date}</p><hr/>
            {event.description} <br />
            at {event.street} <br />
            From {event.startTime} to {event.endTime} (local)<br />
            Organizer: {}(Placeholder) <br />
            <button><strong>Sign Up</strong></button> <span>  </span> <a href={url+event.latitude+","+event.longitude} target="_blank"><button><strong>Get Directions</strong></button></a> <span>  </span> <button><strong>Contact</strong></button>
          
          </div>
        </Popup>
        </Marker>
      
      )}

      </Map>
    )
  }
}

// We are going to replace the osm url with a custom map tile layer, passing the token through the URL.
// > Make route that makes mapbox call
// > set up 