import React, { Component, Fragment } from 'react';
import './App.css';
import Main from './pages/Main'
<script type="text/javascript" src="node_modules/auth0-js/build/auth0.js"></script>

class App extends Component {
  render() {
    return <Fragment>
      <Main />

    </Fragment>
  }
}

export default App;
