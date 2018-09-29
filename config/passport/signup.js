const bCrypt = require("bcrypt-nodejs");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../../models/user");

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
            console.log(req.body);
            if (err) {
              console.log("Error in Signup: " + err);
              return done(err);
            }
            if (user) {
              console.log("User already exists");
              return done(
                null,
                false,
                // req.flash("message", "User already exists")
              );
            } else {
              const newUser = new User();
              const hashPassword = createHash(password);
              const validateEmail = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
              const validatePhone = new RegExp(/\d{3}-\d{3}-\d{4}/);

              // add the data to the newUser object
              if (validateEmail.test(username)) {
                newUser.username = username;
              } else {
                return console.log("Please enter an email.");
              }
              newUser.password = hashPassword;
              newUser.firstName = req.body.firstName;
              newUser.lastName = req.body.lastNamename;
              newUser.address = req.body.address;
              newUser.city = req.body.city;
              newUser.state = req.body.state;
              if (req.body.phoneNumber === "" || validatePhone.test(req.body.phoneNumber)) {
                newUser.phoneNumber = req.body.phoneNumber;
              } else {
                return console.log("Please enter a valid phone number.")
              }

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