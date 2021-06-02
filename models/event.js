var mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  eventDescription: {
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
  isOnline: {
    type: Boolean,
    default: false,
  },
  thumbnailImage: {
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
  websiteLink: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
  startDate: {
    type: Date,
  },
  endDate: {
    type: Date,
  },
});

module.exports = mongoose.model("event", eventSchema);
