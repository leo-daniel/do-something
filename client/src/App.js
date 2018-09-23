import React, { Component, Fragment } from 'react';
import './App.css';
import Main from './pages/Main';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Events from './pages/Events';
import NoMatch from "./pages/NoMatch";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/user/:id" component={Profile} />
        <Route exact path="/events" component={Events} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
