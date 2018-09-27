const db = require("../models");
const passport = require("../config/passport");

module.exports = {
  
  // find all users
  findAll: function(req, res) {
    db.User.find({})
      .then(dbResponse => res.json(dbResponse))
      .catch(err => res.status(422).json(err));
  },

  // get the user's data
  userData: function(req, res) {
    db.User.findById(req.params.id)
      .then(dbResponse => res.json(dbResponse))
      .catch(err => res.status(422).json(err));
  },

  // user status is checked for setting the App.js state
  status: function(req, res) {
    // create id and status variables
    let id;
    let status;

    // check if req.user exists and store the corresponding data
    if (!req.user) {
      id = "";
      status = false;
    } else {
      id = req.user._id;
      status = req.isAuthenticated();
    }

    // create the status object
    const statusObj = {
      userId: id,
      loggedIn: status
    }
    // respond with the statusObj
    res.json(statusObj);
  },
  cookie: function(req, res) {
    // check if req.user exists and store the userId
    if (req.user) {
      // set cookie
      const cookieObj = {
        userId: req.user._id
      };
      res.cookie(req.user._id, req.user._id, { maxAge: 2592000000 });  // Expires in one month    
      res.json(cookieObj);
  } else {
    res.json({
      error: `Sorry, something went wrong!`
    });
  }
},

  // user logout process
  logout: function(req, res) {
    console.log("### Log out intiated ###")
    if (req.user) {
      let userId = req.user._id;     
      req.logout();
      res.json({ message: "logging out" , userId : userId });
    } else {
      res.send({ message: "no user to log out" });
    }
  }
};
