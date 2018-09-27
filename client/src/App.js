import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Registration from "./pages/Registration";
import Profile from "./pages/Profile";
// Should add a 'no match' page later.
// import NoMatch from "./pages/NoMatch";
// To access map for now use localhost:3000/map
import Map from "./pages/Map";
import API from "./utils/API";
import Landing from './pages/Landing';


class App extends Component {

  state = {
    loggedIn: null,
    userId: null
  }

  componentDidMount = () => {
    // this.getUser();
  }

  updateUser = (userObject) => {
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
  }

  render() {

    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" render={() => (
              <Landing updateUser={this.updateUser} />
            )} />
            <Route exact path="/signup" render={() => (
              <Registration updateUser={this.updateUser} />
            )} />
            <Route exact path="/user/:id" component={Profile} />
            {/* Route to test map */}
            <Route exact path="/map" component={Map} />
            {/* <Route component={NoMatch} /> */}
          </Switch>
        </div>
      </Router>
    )
  };
}
export default App;
