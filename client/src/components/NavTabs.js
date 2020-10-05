import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar } from 'react-bulma-components';

function NavTabs() {
  const location = useLocation();

  return (
    <Navbar className="is-light is-spaced nav-tabs">
      <Navbar.Brand>
        <Navbar.Item>
        <i class="fas fa-paw"></i>
        </Navbar.Item>
      </Navbar.Brand>
      <Navbar.Item>
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </Navbar.Item>
      <Navbar.Item>
        <Link to="/search" className={location.pathname === "/search" ? "nav-link active" : "nav-link"}>
          Search
        </Link>
      </Navbar.Item>
      <Navbar.Item>
        <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
          Contact
        </Link>
      </Navbar.Item>
      <Navbar.Item>
        <Link to="/signup" className={location.pathname === "/signup" ? "nav-link active" : "nav-link"}>
          Sign Up
        </Link>
      </Navbar.Item>
    </ Navbar>
  );
}

export default NavTabs;
