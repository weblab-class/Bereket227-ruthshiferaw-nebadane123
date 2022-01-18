import React from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import { Link } from "@reach/router";
import "../../utilities.css";

import Forum from "../pages/Forum";

// import "./Skeleton.css";

import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="NavBar-container">
      <span>
        <div className="NavBar-title"> ICAN </div>
        <div className="Link-title">
          <Link to="/"> Home </Link>
          <Link to="/CollegeInfo/"> College Info </Link>
          <Link to="/Forum/"> Forum </Link>
          <Link to="/Vlogs/"> Vlogs </Link>
        </div>
      </span>
    </nav>
  );
};

export default NavBar;
