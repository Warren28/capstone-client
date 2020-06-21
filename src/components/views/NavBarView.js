import React from "react";
import "./styles/NavBarView.css";
import { Link } from "react-router-dom";

const NavBarView = (props) => {
  const { isLoggedIn } = props;
  let display;
  //console.log(props);
  if(!isLoggedIn){
    display = (
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
    </nav>
    );
  }
  else {
    display = (
      <nav>
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/logout" className="nav-link">
        Logout
      </Link>
      <Link to="/signup" className="nav-link">
        SignUp
      </Link>
      <Link to="/userInfo" className="nav-link">
        Profile
      </Link>    
    </nav>
    );
  }
  return (
    <>
      {display}
    </>
  );

};

export default NavBarView;