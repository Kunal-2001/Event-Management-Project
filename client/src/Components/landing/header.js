import React from "react";
import Button from "@material-ui/core/Button";
import ContactSupportOutlinedIcon from "@material-ui/icons/ContactSupportOutlined";
import LocalOfferOutlinedIcon from "@material-ui/icons/LocalOfferOutlined";
import { Link, useHistory } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <div className="header-container">
      <ul className="header">
        <li>
          <h1>Event Finder</h1>
        </li>
        <div className="right">
          <li className="More-info">
            <Link className="header-elements">
              Contact Us <ContactSupportOutlinedIcon />
            </Link>
            <Link className="header-elements">
              Pricing <LocalOfferOutlinedIcon />
            </Link>
            <Link to="/login" className="header-elements">Login</Link>
            <Link to="/register" className="header-elements">Register</Link>
          </li>
        </div>
      </ul>
    </div>
  );
}
