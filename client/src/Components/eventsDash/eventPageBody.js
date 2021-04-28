import React, { useEffect, useContext, useState } from "react";
import EventCard from "./eventCard";
import "./eventPageBody.css";
import eventsData from "./seedEvents.json";
import { State } from "./eventsContext";
export default function EventPageBody() {
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

  let Events = eventsData.events.map((e) => (
    <EventCard
      image={e.image}
      name={e.name}
      rate={e.rate}
      genre={e.genre}
      rating={e.rating}
    />
  ));

  return <div className="eventCards">{Events}</div>;
}
