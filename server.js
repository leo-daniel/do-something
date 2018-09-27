const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const mongoStore = require('connect-mongo')(session);
const dbConnection = require('./database');
const routes = require('./routes');
const cors = require('cors');
const flash = require('connect-flash');

const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Passport initialization & setup
app.use(cors());
app.use(
  session({
    secret: 'gregnate',
    store: new mongoStore({ mongooseConnection: dbConnection }),
    resave: true,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Add routes, both API and view
app.use(routes);

// Initialize Passport
require('./config/passport')(passport);

// Send every request to the React app
// Define any API routes before this runs
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
