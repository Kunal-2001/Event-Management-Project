import React from "react";
import "./footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-first">
        <h3>Gold Winner</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <ul className="social-media">
          <li>
            <a href="#">
              <FacebookIcon fontSize="large" />
            </a>
          </li>
          <li>
            <a href="#">
              <TwitterIcon fontSize="large" />
            </a>
          </li>
          <li>
            <a href="#">
              <InstagramIcon fontSize="large" />
            </a>
          </li>
          <li>
            <a href="#">
              <LinkedInIcon fontSize="large" />
            </a>
          </li>
        </ul>
      </div>
      <div className="bottom-footer">
        <p>copyright &copy;2021 Algorithm Unlock,Inc. All rights reserved. </p>
      </div>
    </div>
  );
}
