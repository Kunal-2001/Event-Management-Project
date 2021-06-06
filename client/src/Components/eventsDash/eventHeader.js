import React, { useContext } from "react";
import SearchBar from "material-ui-search-bar";
import { Link, useHistory } from "react-router-dom";
import { State } from "./eventsContext";
import Button from "@material-ui/core/Button";
import "./eventHeader.css";
import logo from "../../images/Logo2.png";
import LogoutConfirm from "./logoutButtonConfirmDialog";
export default function Header() {
  const { searchQuery, setSearchQuery } = useContext(State);
  const userName = JSON.parse(localStorage.getItem("data")).username;
  return (
    <div className="header-container">
      <ul className="header">
        <li>
          <img
            src={logo}
            style={{
              width: "200px",
              marginTop: "-25px",
              height: "80px",
            }}
          />
        </li>
        <div className="search-bar-event">
          <li>
            <SearchBar
              searchText={searchQuery}
              onChange={(e) => {
                setSearchQuery(e);
              }}
            />
          </li>
        </div>
        <div className="right">
          <li className="More-info">
            <Link className="header-elements" to="/newEvent">
              <Button variant="outlined" color="primary">
                Create a new event
              </Button>
            </Link>
            <Link className="header-elements">
              <Button variant="outlined" color="primary">
                {userName}
              </Button>
            </Link>
            <Link className="header-elements">
              <LogoutConfirm />
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
}
