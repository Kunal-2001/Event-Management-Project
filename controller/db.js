var user = require("../models/user");
var event = require("../models/event");

const saveEvent = (
  name,
  genre,
  description,
  organizer,
  cost,
  isOnlineEvent,
  imageLink,
  venue,
  city,
  link,
  likes
) => {
  try {
    let newEvent = new event({
      name,
      genre,
      description,
      organizer,
      cost,
      isOnlineEvent,
      imageLink,
      venue,
      city,
      link,
      likes,
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
