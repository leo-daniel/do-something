const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema({
  eventName: {
    type: String,
    trim: true,
    required: [true, 'Event must have a name'],
  },
  description: {
    type: String,
    trim: true,
  },
  organizerID: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  address: {
    type: String,
    trim: true,
  },
  city: {
    type: String,
    trim: true,
  },
  state: {
    type: String,
    trim: true,
  },
  latitude: {
    type: String,
  },
  longitude: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  startTime: {
    type: String,
    trim: true,
  },
  endTime: {
      type: String,
      trim: true
  },
  registeredUsers: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }]
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
