import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./events.css";
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
  useEffect(async () => {
    await axios({
      method: "GET",
      url: "http://localhost:5000/fetchEvents",
    }).then((res) => {
      console.log(res.data.events);
      setData(res.data.events);
    });
  }, []);
  console.log(data);
  return (
    <div className="profile-body">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
      />
      <div className="eventHeader">
        <EventHeader />
      </div>
      <div className="eventPageBody">
        <EventPageBody events={data} />
      </div>
    </div>
  );
};

export default Profile;
