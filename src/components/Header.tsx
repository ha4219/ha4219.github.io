import { Link } from "gatsby";
import React from "react";

export default function Header() {
  return (
    <div data-testid="header">
      <Link to="/">logo</Link>
      <a href="/portfolio">Portfolio</a>
      <a href="/projects">Projects</a>
      <a href="/posts">Posts</a>
      <button>drawer</button>
    </div>
  );
}
