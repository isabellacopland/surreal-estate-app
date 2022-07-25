import React from "react";
import { render } from "@testing-library/react";
import App from "../src/components/App";

describe("App", () => {
  test("renders App", () => {
    const { asFragment } = render(<App />);

    expect(asFragment()).toMatchSnapshot();
  });
});