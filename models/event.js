var mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  attendence: {
    type: Number,
    default: null,
  },
  description: {
    type: String,
    required: true,
  },
  organizer: {
    type: String,
    required: true,
  },
  venue: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("event", eventSchema);
