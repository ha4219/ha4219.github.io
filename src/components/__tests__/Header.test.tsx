import React from "react";
import { render } from "@testing-library/react";
import Header from "../Header";

describe("test Header", () => {
  // logo, portfolio, projects, posts, drawer?
  it("contains 5 items", () => {
    const { getByTestId } = render(<Header />);
    const container = getByTestId("header");
    expect(container.children.length).toBe(5);
  });

  it("logo check", () => {
    const { getByRole } = render(<Header />);
    const logo = getByRole("link", { name: /logo/i });
    expect(logo).toBeInTheDocument();
  });

  it("portfolio check", () => {
    const { getByRole } = render(<Header />);
    const portfolio = getByRole("link", { name: /portfolio/i });
    expect(portfolio).toBeInTheDocument();
  });

  it("projects check", () => {
    const { getByRole } = render(<Header />);
    const projects = getByRole("link", { name: /projects/i });

    expect(projects).toBeInTheDocument();
  });

  it("posts check", () => {
    const { getByRole } = render(<Header />);
    const posts = getByRole("link", { name: /posts/i });

    expect(posts).toBeInTheDocument();
  });

  it("drawer check", () => {
    const { getByRole } = render(<Header />);
    const drawer = getByRole("button", { name: /drawer/i });

    expect(drawer).toBeInTheDocument();
  });
});
