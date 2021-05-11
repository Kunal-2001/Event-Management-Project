import Login from "./Components/auth/login";
import Register from "./Components/auth/register";
import Landing from "./Components/landing/landing.js";
import Events from "./Components/eventsDash/events";
import PricingPage from "./Components/landing/pricingPage";
import CreateEvent from "./Components/NewEvent/CreateEventPage";
import "./App.css";
import React, { useContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/events">
          <Events />
        </Route>
        <Route exact path="/pricing">
          <PricingPage />
        </Route>
        <Route exact path="/newEvent">
          <CreateEvent />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
