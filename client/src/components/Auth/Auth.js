import auth0 from 'auth0-js';

// src/Auth/Auth.js

// import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'do-something.auth0.com',
    clientID: '-vHKK6h6XsthS7xKi6SZnMA0M_9A6UNT',
    redirectUri: 'http://localhost:3000/login',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }
}