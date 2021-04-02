import React from "react";
import Button from "@material-ui/core/Button";
import ContactSupportOutlinedIcon from "@material-ui/icons/ContactSupportOutlined";
import LocalOfferOutlinedIcon from "@material-ui/icons/LocalOfferOutlined";
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
            <Button className="Contact">
              Contact Us <ContactSupportOutlinedIcon />
            </Button>
            <Button className="Pricing">
              Pricing <LocalOfferOutlinedIcon />
            </Button>
            <Button className="Login">Login</Button>
            <Button className="Register">Register</Button>
          </li>
        </div>
      </ul>
    </div>
  );
}
