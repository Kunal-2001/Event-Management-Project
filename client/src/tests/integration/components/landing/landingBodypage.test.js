import React from "react";
import ReactDOM from "react-dom";
import LandingBodyPage from "./../../../../Components/landing/landingBodyPage.js";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
// import renderer from "react-test-renderer";

afterEach(cleanup);

test("Renders the landing page Body DOM ", () => {
  const div = document.createElement("div");
  ReactDOM.render(<LandingBodyPage></LandingBodyPage>, div);
});

test("Render landing page body elements", () => {
  const { getByTestId } = render(<LandingBodyPage></LandingBodyPage>);
  const notifyButton = expect(getByTestId("notify-button"));
  const dummyEvents = expect(getByTestId("display-events"));
  notifyButton.toBeEnabled();
  notifyButton.toHaveTextContent("Get Notify");
});
