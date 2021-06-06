var mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  eventName: {
    type: String,
    default: "Name",
    required: true,
  },
  genre: {
    type: String,
    default: "Comedy",
    required: true,
  },
  eventDescription: {
    type: String,
    default: "Fun",
    required: true,
  },
  organizer: {
    type: String,
    default: "Organzier",
    required: true,
  },
  cost: {
    type: Number,
    default: 0,
    required: true,
  },
  isOnline: {
    type: Boolean,
    default: false,
  },
  thumbnailImageUrl: {
    type: String,
  },
  thumbnailImageLocation: {
    type: String,
  },
  venue: {
    type: String,
    default: "venue",
  },
  city: {
    type: String,
    default: "city",
  },
  websiteLink: {
    type: String,
    required: true,
    default: "yes",
  },
  likes: {
    type: Number,
    default: 0,
  },
  startDate: {
    type: Date,
    default: Date.now(),
  },
  endDate: {
    type: Date,
    default: Date.now(),
  },
  userID: {
    type: String,
    default: "Nothing",
  },
});

module.exports = mongoose.model("event", eventSchema);
