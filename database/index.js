const mongoose = require("mongoose");

// Connect to the Mongo DB
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dosomething");

const dbConnect = mongoose.connection;

dbConnect.on("error", function(err) {
    console.log("Mongoose Error: ", err);
  });
  
dbConnect.once("open", function() {
    console.log("Mongoose connection successful.");
  });

module.exports = mongoose.connection;