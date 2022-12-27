import React from "react";
import { render } from "@testing-library/react";

import Header from "./Header";

describe("Header", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<Header />);
    const h1 = getByTestId("hero-title");
    expect(h1).toHaveTextContent("Gatsby is awesome!");
  });
});
