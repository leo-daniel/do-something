const bCrypt = require('bcrypt-nodejs');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../../models/user');

module.exports = function (passport) {
  const isValidPassword = function (user, password) {
    return bCrypt.compareSync(password, user.password);
  };

  // passport login strategy
  passport.use(
    'login',
    new LocalStrategy(
      {
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true,
      },
      (req, username, password, done) => {
        User.findOne({ username }, (err, user) => {
          if (err) return done(err);
          if (!user) {
            // TODO: Client-side message
            console.log(`User Not Found with username ${username}`);
            return done(null, false);
          }
          if (!isValidPassword(user, password)) {
            // TODO: Client-side message
            console.log('Invalid Password');
            return done(null, false);
          }
          return done(null, user);
        });
      },
    ),
  );
};
