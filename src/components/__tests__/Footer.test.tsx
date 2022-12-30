import { render } from "@testing-library/react";
import React from "react";
import Footer from "../Footer";

describe("test Footer", () => {
  it("footer", () => {
    const { getByTestId } = render(<Footer />);
    const footer = getByTestId("footer");

    expect(footer).toBeInTheDocument();
  });
});
