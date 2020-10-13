import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar } from 'react-bulma-components';

function NavTabs(props) {
  const location = useLocation();

  // function toggleBurgerMenu() {
  //   document.querySelector('.navbar-menu').toggle('is-active');
  // }

  return (
    <Navbar className="is-light is-spaced nav-tabs">
      <Navbar.Brand>
        <Navbar.Item>
        <i class="fas fa-paw"></i>
        </Navbar.Item>
      </Navbar.Brand>
      {/* <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasic"
          onClick={toggleBurgerMenu}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
      </a> */}
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

      {/* button to test out reso page,move to cards */}
      <Navbar.Item>
          
      <Link to="/reserve" className={location.pathname === "/reserve" ? "nav-link active" : "nav-link"}>
          reserve
        </Link>
      </Navbar.Item>
    </ Navbar>
  );
}

export default NavTabs;
