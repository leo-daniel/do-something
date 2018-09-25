import axios from "axios";

export default {
  // Gets all events
  getEvents: function() {
    return axios.get("/api/events");
  },
  // Gets the event with the given id
  getEvent: function(id) {
    return axios.get("/api/events/" + id);
  },
  // Update the event with the given id
  updateEvent: function(id) {
    return axios.put("/api/events" + id);
  },
  // Gets all users
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the user with the given id
  getUser: function(id) {
    return axios.get("/api/users" + id);
  },
  // Create a new user
  createUser: function(userData) {
    return axios.post("/api/users", userData);
  },
  // Update the user with the given id
  updateUser: function(id) {
    return axios.put("/api/users" + id);
  }
};
