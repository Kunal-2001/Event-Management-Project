import React from "react";
import "./landing.css";
import Header from "./header.js";
import Footer from "./footer.js";
import LandingPageBody from "./landingBodyPage";

export default function Landing() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="landingPageBody">
        <LandingPageBody />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
