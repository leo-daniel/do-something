const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  eventName: { 
    type: String,
    trim: true,
    unique: true, // We would want a '_id' right? Is this what generates it? This would cause event names to be unique which we don't necessarily want...?
    required: [true, 'Event must have a name']
  },
  description: { 
    type: String,
    trim: true, 
  },
  organizer: { // How should we want the organizer? Will this be populated from the name user object when the user creates the event? (concat of first/last name? or uniqueID?)
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
    },
    latitude: { 
        type: String, // Looks like mongoose supports 'Number' as integers but not float here. Because of this and having a negative float we can just parseFloat when consuming this. 
    },
    longitude: {
        type: String,
    }
  },
  date: {
    type: Date,
    default: Date.now
  },
  startTime: {
      type: String, // As string?
      trim: true
  },
  endTime: {
      type: String,
      trim: true
  }
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
