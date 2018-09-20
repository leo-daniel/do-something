const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { 
    type: String,
    unique: true,
    trim: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  password: { 
    type: String,
    trim: true, 
    required: [true, 'Password is required'] 
  },
  name: {
    first: {
      type: String,
      trim: true
    },
    last: {
      type: String,
      trim: true
    }
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
    validate: {
      validator: function(v) {
        return /\d{3}-\d{3}-\d{4}/.test(v);
      },
      message: props => `${props.value} is not a valid phone number!`
    }
  },
  volunteerRadius: String,
  userCreated: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
