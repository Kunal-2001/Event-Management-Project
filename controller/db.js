var user = require("../models/user");
var event = require("../models/event");

const saveEvent = (
  eventName,
  genre,
  eventDescription,
  organizer,
  cost,
  isOnline,
  thumbnailImageUrl,
  thumbnailImageLocation,
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
      thumbnailImageUrl,
      thumbnailImageLocation,
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

const editEvent = async ({
  eventId,
  eventName,
  genre,
  eventDescription,
  organizer,
  cost,
  isOnline,
  venue,
  city,
  websiteLink,
  startDate,
  endDate,
}) => {
  event
    .findByIdAndUpdate(eventId, {
      eventName,
      genre,
      eventDescription,
      organizer,
      cost,
      isOnline,
      venue,
      city,
      websiteLink,
      startDate,
      endDate,
    })
    .then((res) => {
      return true;
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  saveEvent,
  editEvent,
};
