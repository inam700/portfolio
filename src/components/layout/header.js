import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="navbar">
      <div className="container flex">
        <h1>Portfolio</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/project">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
