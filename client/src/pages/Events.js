import React, { Component } from "react";
import Navbar from "../components/Navbar";
import LeafletMap from "../components/LeafletMap";
import EventFeed from "../components/EventFeed";
import API from "../utils/API"

class Events extends Component {
  state = {
    loggedIn: null,
    userId: null,
  };

  componentDidMount = () => {
    this.getUser();
  };

  updateUser = userObject => {
    console.log(userObject);
    this.setState(userObject);
  };

  getUser = () => {
    API.getUserStatus()
      .then(res => {
        console.log(res);
        this.setState({
          loggedIn: res.data.loggedIn,
          userId: res.data.userId
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
    <div>
      <Navbar />
      <LeafletMap />
      <EventFeed />
    </div>
    )
  }
}
export default Events;