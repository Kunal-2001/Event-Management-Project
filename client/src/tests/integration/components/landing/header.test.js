import React from "react";
import ReactDOM from "react-dom";
import Header from "./../../../../Components/landing/header.js";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
// import renderer from "react-test-renderer";

afterEach(cleanup);

test("Renders the landing page header dom ", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Header></Header>, div);
});

test("Renders header correctly", () => {
  const { getByTestId } = render(<Header></Header>);
  const contact = expect(getByTestId("contact"));
  const pricing = expect(getByTestId("pricing"));
  const login = expect(getByTestId("login"));
  const register = expect(getByTestId("register"));

  // Get Validation Of button
  contact.toBeEnabled();
  pricing.toBeEnabled();
  login.toBeEnabled();
  register.toBeEnabled();

  // Get text validations
  contact.toHaveTextContent("Contact Us");
  pricing.toHaveTextContent("Pricing");
  login.toHaveTextContent("Login");
  register.toHaveTextContent("Register");
});

// test("Should match header snapshot", () => {
//   const virtualDOM = renderer.create(<Header></Header>).toJSON();
//   expect(virtualDOM).toMatchSnapshot();
// });
