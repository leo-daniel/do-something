import React, { Component } from "react";
import API from "../utils/API";
import Navbar from "../components/Navbar";
import EventCard from "../components/EventCard";
// import Album from "../components/Album";

// stateful component
class EventFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }
  
  componentWillMount() {
    API.getEvents()
      .then(res => {
        // console.log(JSON.stringify(res, undefined, 2));
        this.setState({ events: res.data });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        {console.log(JSON.stringify(this.state.events, undefined, 2))}
        <Navbar />
        {this.state.events.map((event) => 
        <EventCard
            key={event._id}
            title={event.eventName}
            city={event.city}
            usstate={event.state}
            // date={event.date} TODO: need to convert UTC to readable date
            time={event.startTime}
            description={event.description}
            id={event._id}
        />)}
      </div>
    )
  }
}

export default EventFeed;
