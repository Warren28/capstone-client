import React from "react";
import "./styles/NavBarView.css";
import { Link } from "react-router-dom";

const NavBarView = (props) => {
  return (
    <nav>
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/login" className="nav-link">
        Login
      </Link>
      <Link to="/signup" className="nav-link">
        SignUp
      </Link>
      <Link to="/results" className="nav-link">
        Search
      </Link>
      
    </nav>
  );

};

export default NavBarView;