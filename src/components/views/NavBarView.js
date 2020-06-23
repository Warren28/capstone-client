import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";

const NavBarView = (props) => {
  const { isLoggedIn } = props;
  let display;
  //console.log(props);
  if (!isLoggedIn) {
    display = (
      <header>
        <Navbar bg="dark" variant="dark">
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/signup" className="nav-link">
                Sign Up
              </Link>
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  } else {
    display = (
      <Navbar bg="dark" variant="dark">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/userInfo" className="nav-link">
              Profile
            </Link>
            <Link to="/logout" className="nav-link">
              Logout
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
  return <>{display}</>;
};

export default NavBarView;
