import React from "react";
import animation from "../../images/drawkit-grape-animation-2-LOOP.json";
import LottieAnimation from "./lottie.js";
import EventDisplayLanding from "./eventDisplayLanding.js";
import "aos/dist/aos.css";
import "./landingBodyPage.css";
// import calender from "../../images/calendar-colour.svg";
export default function LandingBodyPage() {
  const eventsInfo = [
    {
      eventImage:
        "https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      eventName: "Tomorrowland",
      eventGenre: "Party",
    },
    {
      eventImage:
        "https://jeniffergoams.files.wordpress.com/2012/06/events.jpg",
      eventName: "UNICORN",
      eventGenre: "Business",
    },
    {
      eventImage:
        "https://i.pinimg.com/originals/b2/e0/b1/b2e0b181849b93e1f16c9937e996be7b.jpg",
      eventName: "Canva Laugh",
      eventGenre: "Comedy",
    },
    {
      eventImage:
        "https://i.pinimg.com/originals/1e/8a/ae/1e8aaefd30af0e64d358b13cf3961120.jpg",
      eventName: "Fight With It!",
      eventGenre: "Action/Fun",
    },
  ];
  const eventDisplay = eventsInfo.map((person) => (
    <EventDisplayLanding
      eventImage={person.eventImage}
      name={person.eventName}
      eventGenre={person.eventGenre}
    />
  ));
  return (
    <>
      <div className="body-container">
        <div className="body-container-text">
          <p>Upgrade to the</p>
          <h1>World's most loved event software</h1>
          <div className="subscribe-to-notify">
            <input className="input-notify" placeholder="Enter your email" />
            <button data-testid="notify-button" className="notify-email-button">
              Get Notify
            </button>
          </div>
        </div>
        <div className="lottie-animation">
          <LottieAnimation
            className="lottie-component"
            lotti={animation}
            height={600}
            width={700}
          />
        </div>
      </div>
      <div className="events-display">
        <h1>
          Som<span>e Events Picked B</span>y Us
        </h1>
        <div data-testid="display-events" className="event-display-landing">
          {eventDisplay}
        </div>
      </div>
    </>
  );
}
