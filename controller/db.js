var user = require("../models/user");
var event = require("../models/event");

const saveEvent = (
  name,
  attendence,
  description,
  organizer,
  venue,
  city,
  link,
  startDate,
  endDate
) => {
  try {
    let newEvent = new event({
      name,
      attendence,
      description,
      organizer,
      venue,
      city,
      link,
      startDate,
      endDate,
    });
    newEvent.save().catch((err) => console.log(err));
    return true;
  } catch (err) {
    return false;
  }
};

module.exports = {
  saveEvent,
};
