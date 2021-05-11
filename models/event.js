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
  },
  city: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("event", eventSchema);
