// database
const db = require('../models');

// npm modules
const passport = require('../config/passport');
// ==================================

// Check for existing users

// ==================================
// find all users
module.exports = {
  findAll(req, res) {
    db.User.find(req.query)
      .sort({ userCreated: -1 })
      .then(dbModel => res.json(dbModel))
    // TODO: Add client-side error reporting
      .catch(err => res.status(422).json(err));
  },
  findById(req, res) {
    db.User.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
    // TODO: Add client-side error reporting
      .catch(err => res.status(422).json(err));
  },

  // user status is checked for setting the App.js state
  status(req, res) {
    // create id and status variables
    let id;
    let status;

    // check if req.user exists and store the corresponding data
    if (!req.user) {
      id = '';
      status = false;
    } else {
      id = req.user._id;
      status = req.isAuthenticated();
    }

    // create the status object
    const statusObj = {
      userId: id,
      loggedIn: status,
    };
    // respond with the statusObj
    // TODO: Add client-side flash-messaging & redirect if not-authenticated
    res.json(statusObj);
  },
  cookie(req, res) {
    // check if req.user exists and store the userId
    if (req.user) {
      // set cookie
      const cookieObj = {
        userId: req.user._id,
      };
      res.cookie(req.user._id, req.user._id, { maxAge: 2592000000 }); // Expires in one month
      res.json(cookieObj);
    } else {
      res.json({
        // TODO: Client-side flash messaging & redirect
        error: 'Sorry, something went wrong!',
      });
    }
  },
  // ==================================

  // LOG OUT

  // ==================================

  // user logout process
  logout(req, res) {
    // TODO: Client-side logging out in process
    console.log('### Log out intiated ###');
    if (req.user) {
      // let userId = req.user._id;
      req.logout();
      req.session.destry((err) => {
        if (!err) {
          res
            .status(200)
            .clearCookie('connect.sid', { path: '/' })
          // TODO: Log out success
            .json({ status: 'Success' });
        } else {
          res.send({ message: 'no session to destroy' });
        }
      });
      // res.json({ message: "logging out" , userId : userId });
    } else {
      // TODO: Not logged in
      res.send({ message: 'no user to log out' });
    }
  },
};
