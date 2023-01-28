import { Link } from "gatsby";
import React from "react";
import "./_nav.scss";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <div className="nav__links">
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/">Link</Link>
          </li>
          <li>
            <Link to="/">Link</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
