import React, { useContext } from "react";
import SearchBar from "material-ui-search-bar";
import { Link, useHistory } from "react-router-dom";
import { State } from "./eventsContext";
import Button from "@material-ui/core/Button";
import "./eventHeader.css";
import logo from "../../images/Logo2.png";
export default function Header() {
  const { searchQuery, setSearchQuery } = useContext(State);

  return (
    <div className="header-container">
      <ul className="header">
        <li>
          <img
            src={logo}
            style={{
              width: "250px",
              marginTop: "-35px",
              height: "100px",
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
            <Link className="header-elements">
              <Button variant="outlined" color="primary">
                Harry
              </Button>
            </Link>
            <Link to="/login" className="header-elements">
              <Button variant="outlined" color="primary">
                Logout
              </Button>
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
}
