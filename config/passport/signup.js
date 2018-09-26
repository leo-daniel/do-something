const bCrypt = require("bcrypt-nodejs");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../../models/User");

module.exports = function (passport) {
  const createHash = function (password) {
    return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
  };

  // passport signup strategy
  passport.use(
    "signup",
    new LocalStrategy(
      {
        usernameField: "username",
        passwordField: "password",
        passReqToCallback: true
      },
      (req, username, password, done) => {
        findOrCreateUser = () => {
          User.findOne({ username: username }, (err, user) => {
            if (err) {
              console.log("Error in Signup: " + err);
              return done(err);
            }
            if (user) {
              console.log("User already exists");
              return done(
                null,
                false,
                req.flash("message", "User already exists")
              );
            } else {
              const newUser = new User();
              const hashPassword = createHash(password);

              // add the data to the newUser object
              newUser.username = username;
              newUser.password = hashPassword;

              // create new User account in database
              newUser.save(err => {
                if (err) {
                  console.log(`Error in saving user: ${err}`);
                  throw err;
                }
                return done(null, newUser);
              }
              )
            };
          });
        }
        process.nextTick(findOrCreateUser);
      }
    )
  );
};