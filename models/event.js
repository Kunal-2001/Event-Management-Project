var mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  organizer: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  isOnlineEvent: {
    type: Boolean,
    default: false,
  },
  imageLink: {
    type: String,
  },
  venue: {
    type: String,
    default: undefined,
  },
  city: {
    type: String,
    default: undefined,
  },
  link: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
  eventStartDate: {
    type: Date,
  },
  eventEndDate: {
    type: Date,
  },
});

module.exports = mongoose.model("event", eventSchema);
