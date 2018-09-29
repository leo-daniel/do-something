const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    trim: true,
    required: [true, "Email is required"],
    lowercase: true,
    match: [/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please enter a valid email address']
  },
  password: {
    type: String,
    trim: true,
    required: [true, 'Password is required']
  },
  firstName: {
    type: String,
    trim: true
  },
  lastName: {
    type: String,
    trim: true

  },
  location: {
    address: {
      type: String,
      trim: true
    },
    city: {
      type: String,
      trim: true
    },
    state: {
      type: String,
      trim: true
    }
  },
  phoneNumber: {
    type: String,
    required: false,
    validate: {
      validator: function (v) {
        const reg = /\d{3}-\d{3}-\d{4}/
        if (v === "" ) {
          return true
        } else {
          return reg.test(v);
        }
      },
      message: props => `${props.value} is not a valid phone number!`
    }
  },
  userCreated: {
    type: Date,
    default: Date.now
  }
});

const user = mongoose.model("User", userSchema);

module.exports = user;
