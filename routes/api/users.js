// the routes can be added to the api/users file
// that will prob need to have the old create method removed

const router = require('express').Router();
const authController = require('../../controllers/authController');
const passport = require('passport');

// Endpoints for 'api/users'
router.route('/').get(authController.findAll);

// Endpoints for '/api/users/signup' AKA Signup for Account
router.route('/signup').post(passport.authenticate('signup'), (req, res) => {
  console.log('signup success', req.user);
  const userInfo = {
    username: req.user.username,
  };
  res.send(userInfo);
});

// Endpoints for 'api/users/:id' aka Get User ID
router.route('/:id').get(authController.findById);

// Endpoints for  '/api/users/login' aka Sign-In
router.route('/login').post(
  (req, res, next) => {
    console.log('userAPI File, req.body');
    console.log(req.body);
    next();
  },
  passport.authenticate('login'),
  (req, res) => {
    console.log('logged in', req.user);
    const userInfo = {
      username: req.user.username,
    };
    res.send(userInfo);
  }
);

// Logging in & authentication with passport
router.route('/login/external').post(
  (req, res, next) => {
    console.log('userAPI File, req.body');
    console.log(req.body);
    next();
  },
  passport.authenticate('login'),
  (req, res) => {
    console.log('logged in', req.user);
    const userInfo = {
      username: req.user.username,
      userId: req.user._id,
      userStatus: 'logged in',
    };
    res.cookie('doSomethingID', req.user._id);
    res.send(userInfo);
  }
);

// Endpoint for Logout -- '/api/users/logout'
router.route('/logout').get(authController.logout);

// Endpoint for User Status -- '/api/users/status'
router.route('/status').get(authController.status);

// Endpoint for UserID -- '/api/users/:id'
router.route('/users/:id').get(authController.findById);

// Endpoint for Session Cookie -- '/api/users/cookie'
router.route('/cookie').get(authController.cookie);

module.exports = router;
