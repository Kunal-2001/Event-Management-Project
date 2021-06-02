var user = require("../models/user");
var event = require("../models/event");

const saveEvent = (
  eventName,
  genre,
  eventDescription,
  organizer,
  cost,
  isOnline,
  thumbnailImage,
  venue,
  city,
  websiteLink,
  likes,
  startDate,
  endDate
) => {
  try {
    let newEvent = new event({
      eventName,
      genre,
      eventDescription,
      organizer,
      cost,
      isOnline,
      thumbnailImage,
      venue,
      city,
      websiteLink,
      likes,
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
