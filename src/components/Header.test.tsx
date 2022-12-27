import React from "react";
import { render } from "@testing-library/react";

import Header from "./Header";

describe("Header", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<Header />);
    const container = getByTestId("header");
    expect(container).toHaveTextContent("Gatsby is awesome!");
  });
});
