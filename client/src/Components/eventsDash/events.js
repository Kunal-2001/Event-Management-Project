import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import {
  FaArrowLeft,
  FaCheck,
  FaCalendarAlt,
  FaTimes,
  FaExclamationTriangle,
  FaClock,
  FaThumbtack,
  FaPlus,
  FaAlignLeft,
} from "react-icons/fa";
import "./events.css";
import { TiThLarge } from "react-icons/ti";
import { Link, useHistory } from "react-router-dom";
import EventHeader from "./eventHeader";
import EventPageBody from "./eventPageBody";
const Profile = () => {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [eventStatus, setEventStatus] = useState("All Events");
  const [userName, setUserName] = useState("");
  //   const { userData, setUserData, setIsAuth } = useContext(State);
  const history = useHistory();
  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:5000/fetchEvents",
    }).then((res) => {
      console.log(res.data);
    });
  }, []);
  //   const onLogout = () => {
  //     setUserData({
  //       token: undefined,
  //       user: undefined,
  //     });
  //     setIsAuth(false);
  //     localStorage.clear();
  //     history.push("/");
  //   };

  //   const handleAllEvents = () => {
  //     setFilterData(data);
  //     setEventStatus("All Events (Click on any event to go to dashboard)");
  //   };
  //   const handleDeleteEvents = () => {
  //     setFilterData(data);
  //     setEventStatus("Delete Event");
  //   };

  //   const handleOngoing = () => {
  //     let filtered = data.filter((item) => {
  //       return item.status === 0;
  //     });
  //     setFilterData(filtered);
  //     setEventStatus("Ongoing Events");
  //   };
  //   const handleUpcoming = () => {
  //     let filtered = data.filter((item) => {
  //       return item.status === 2;
  //     });
  //     setFilterData(filtered);
  //     setEventStatus("Upcoming Events");
  //   };
  //   const handleFinished = () => {
  //     let filtered = data.filter((item) => {
  //       return item.status === 1;
  //     });
  //     setFilterData(filtered);
  //     setEventStatus("Finished Events");
  //   };
  return (
    <div className="profile-body">
      <div className="eventHeader">
        <EventHeader />
      </div>
      <div className="eventPageBody">
        <EventPageBody />
      </div>
    </div>
  );
};

export default Profile;
