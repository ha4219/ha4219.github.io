import { Link } from "gatsby";
import React from "react";

export default function Header() {
  return (
    <div data-testid="header">
      <Link to="/">logo</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/posts">Posts</Link>
      <button>drawer</button>
    </div>
  );
}
