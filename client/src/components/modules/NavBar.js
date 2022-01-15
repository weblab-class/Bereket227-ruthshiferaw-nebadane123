import React from "react";
 
import { Link } from "@reach/router";
import "./NavBar.css";

const NavBar=() =>{
    return  (
    <nav className="NavBar-container">
    <div className="NavBar-title">
    ICAH
    </div>
    <div className= "Link-title" >
    <Link to="/"> Home </Link>
    <Link to= "/collegeinfo/"> College Info </Link>
    <Link to= "/forum/"> Forum </Link> 
    <Link to= "/vlogs/"> Vlogs </Link>
    </div>
    
    </nav>
    )
};

export default NavBar;
