import auth0 from 'auth0-js';

class Auth {
  constructor() {
    this.auth0 = new auth0.WebAuth({
      domain: 'do-something.auth0.com',
      audience: 'do-something.auth0.com/userinfo',
      clientID: '-vHKK6h6XsthS7xKi6SZnMA0M_9A6UNT',
      redirectUri: 'http://localhost:3000/login',
      responseType: 'token id_token',
      scope: 'openid profile',
    });

    this.getProfile = this.getProfile.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  getProfile() {
    return this.profile;
  }

  getIdToken() {
    return this.idToken;
  }

  handleAuthentication() {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (err) return reject(err);
        if (!authResult || !authResult.idToken) {
          return reject(err);
        }
        this.idToken = authResult.idToken;
        this.profile = authResult.idTokenPayload;
        // time for token ID to expire
        this.expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
        resolve();
      });
    });
  }

  isAuthenticated() {
    return new Date().getTime() < this.expiresAt;
  }

  signIn() {
    this.auth0.authorize();
  }

  signOut() {
    // clear id token, profile, and expiration
    this.idToken = null;
    this.profile = null;
    this.expiresAt = null;
  }
}

const auth0Client = new Auth();

export default auth0Client;
