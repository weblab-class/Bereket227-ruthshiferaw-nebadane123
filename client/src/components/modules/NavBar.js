import React from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import { Link } from "@reach/router";
import "../../utilities.css";
// import "./Skeleton.css";

import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="NavBar-container">
      <div className="NavBar-title">ICAH</div>
      <div className="Link-title">
        <Link to="/"> Home </Link>
        <Link to="/collegeInfo/"> College Info </Link>
        <Link to="/forum/"> Forum </Link>
        <Link to="/vlogs/"> Vlogs </Link>
      </div>
    </nav>
  );
};

export default NavBar;
