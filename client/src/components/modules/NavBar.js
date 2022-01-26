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
        <div className="NavBar-title u-inlineBlock"> ICAN </div>
        <div className="Link-container u-inlineBlock">
          <Link to="/" className="Link-title">
            {" "}
            Home{" "}
          </Link>
          <Link to="/CollegeInfo/" className="Link-title">
            {" "}
            College Info{" "}
          </Link>
          <Link to="/Forum/" className="Link-title">
            {" "}
            Forum{" "}
          </Link>
          <Link to="/Resources/" className="Link-title">
            {" "}
            Resources{" "}
          </Link>
        </div>
      </span>
    </nav>
  );
};

export default NavBar;
