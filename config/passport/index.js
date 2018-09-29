const login = require('./login');
const signup = require('./signup');
const User = require('../../models/User');

// Passport Export
module.exports = function(passport) {
  passport.serializeUser((user, done) => {
    console.log(user);
    done(null, user._id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      console.log(user);
      done(err, user);
    });
  });

  login(passport);
  signup(passport);
};
