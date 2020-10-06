import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  const location = useLocation();

  return (
    <ul className="navbar is-white is-spaced nav-tabs">
      <li className="navbar-item">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="navbar-item">
        <Link to="/search" className={location.pathname === "/search" ? "nav-link active" : "nav-link"}>
          Search
        </Link>
      </li>
      <li className="navbar-item">
        <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
          Contact
        </Link>
      </li>
      <li className="navbar-item">
        <Link to="/signup" className={location.pathname === "/signup" ? "nav-link active" : "nav-link"}>
          Sign Up
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
