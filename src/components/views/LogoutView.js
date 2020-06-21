import React from "react";
import "./styles/NavBarView.css";
import { Link } from "react-router-dom";

const LogoutView = (props) => {

  return (
    <>
    <div>You logouted</div> 
    <nav>
        <Link to="/" className="nav-link">
            Home
        </Link>
    </nav>
    </>
  );

};

export default LogoutView;