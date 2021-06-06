import React, { useEffect, useContext, useState } from "react";
import EventCard from "./eventCard";
import "./eventPageBody.css";
import eventsData from "./seedEvents.json";
import { State } from "./eventsContext";
import axios from "axios";
export default function EventPageBody({ events, setData }) {
  // const { searchQuery, setSearchQuery } = useContext(State);
  // const [data, setData] = useState("");
  // useEffect(() => {
  //   let filtered;
  //   if (searchQuery != null) {
  //     filtered = eventsData.events.filter((e) => {
  //       return e.name.toLowerCase().includes(searchQuery.toLowerCase());
  //     });
  //   }
  //   setData(filtered);
  // }, [searchQuery]);
  // console.log(searchQuery);
  let allEvents = events.map((e) => (
    <EventCard
      setData={setData}
      eventId={e._id}
      image={e.thumbnailImageUrl}
      desc={e.eventDescription}
      name={e.eventName}
      rate={e.cost}
      genre={e.genre}
      userID={e.userID}
      isOnline={e.isOnline}
      startDate={e.startDate}
      endDate={e.endDate}
    />
  ));
  return <div className="eventCards">{allEvents}</div>;
}
