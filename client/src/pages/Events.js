import React, { Component, Fragment } from "react";
import API from "../utils/API";
import Navbar from "../components/Navbar";
import EventCard from "../components/EventCard";
import Album from "../components/Album";

// stateful component
class EventFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      EventCardData: null
    };
  }
  componentWillMount() {
    API.getEvents()
      .then(res => {
        console.log(res);
        this.setState({ EventCardData: res });
      })
      .catch(error => console.log(error));
  }
  render() {
    return (
      <div>
        <Navbar />
        <EventCard data={this.state.EventCardData} />
      </div>
    );
  }
}

export default EventFeed;
