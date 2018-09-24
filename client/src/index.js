import React from 'react';
import ReactDOM from 'react-dom';

import 'leaflet/dist/leaflet.css';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Middleware for token management with Auth0
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://do-something.auth0.com/.well-known/jwks.json`,
  }),

  // validation
  audience: '-vHKK6h6XsthS7xKi6SZnMA0M_9A6UNT',
  issuer: `https://do-something.auth0.com/`,
  algorithms: ['RS256'],
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
