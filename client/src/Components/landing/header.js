import React from "react";
import ContactSupportOutlinedIcon from "@material-ui/icons/ContactSupportOutlined";
import LocalOfferOutlinedIcon from "@material-ui/icons/LocalOfferOutlined";
import { Link, BrowserRouter as Router } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <Router>
      <div className="header-container">
        <ul className="header">
          <li>
            <h1>Event Finder</h1>
          </li>
          <div className="right">
            <li className="More-info">
              <Link data-testid="contact" to="/" className="header-elements">
                Contact Us <ContactSupportOutlinedIcon />
              </Link>
              <Link
                data-testid="pricing"
                to="/pricing"
                className="header-elements"
              >
                Pricing <LocalOfferOutlinedIcon />
              </Link>
              <Link data-testid="login" to="/login" className="header-elements">
                Login
              </Link>
              <Link
                data-testid="register"
                to="/register"
                className="header-elements"
              >
                Register
              </Link>
            </li>
          </div>
        </ul>
      </div>
      {/* //{" "} */}
    </Router>
  );
}
