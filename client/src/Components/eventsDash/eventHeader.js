import React from "react";
import SearchBar from "material-ui-search-bar";
import { Link, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import "./eventHeader.css";

export default function Header() {
  return (
    <div className="header-container">
      <ul className="header">
        <li>
          <h1>Event Finder</h1>
        </li>
        <div className="search-bar-event">
          <li>
            <SearchBar />
          </li>
        </div>
        <div className="right">
          <li className="More-info">
            <Link className="header-elements">Profile</Link>
            <Link to="/login" className="header-elements">
              Logout
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
}
