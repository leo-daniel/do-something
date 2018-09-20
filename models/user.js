const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { 
    type: String,
    unique: true,
    required: [true,'Email is required']
  },
  password: { 
    type: String, 
    required: [true, 'Password is required'] 
  },
  name: {
    first: String,
    last: String
  },
  location: {
    address: String,
    city: String,
    state: String
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
  volunteerRadius: String
});

const User = mongoose.model("User", userSchema);

module.exports = User;
