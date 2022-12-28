import React from "react";
import { render } from "@testing-library/react";
import Header from "../Header";

describe("test Header", () => {
  // logo, portfolio, projects, posts, drawer?
  // it("contains 5 items", () => {
  //   const { getByTestId } = render(<Header />);
  //   const container = getByTestId("header");
  //   expect(container.children.length).toBe(5);
  // });

  it("logo check", () => {
    const { getByTestId } = render(<Header />);
    const logo = getByTestId("logo");

    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("href", "/");
  });

  it("portfolio check", () => {
    const { getByRole } = render(<Header />);
    const portfolio = getByRole("link", { name: /about/i });
    expect(portfolio).toBeInTheDocument();
    expect(portfolio).toHaveAttribute("href", "/portfolio");
  });

  it("projects check", () => {
    const { getByRole } = render(<Header />);
    const projects = getByRole("link", { name: /projects/i });

    expect(projects).toBeInTheDocument();
    expect(projects).toHaveAttribute("href", "/projects");
  });

  it("posts check", () => {
    const { getByRole } = render(<Header />);
    const posts = getByRole("link", { name: /posts/i });

    expect(posts).toBeInTheDocument();
    expect(posts).toHaveAttribute("href", "/posts");
  });

  it("drawer check", () => {
    const { getByRole } = render(<Header />);
    const drawer = getByRole("button");

    expect(drawer).toBeInTheDocument();
  });
});
