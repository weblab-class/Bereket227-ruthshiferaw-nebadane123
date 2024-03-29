import React, { Component } from "react";
import NavBar from "../modules/NavBar";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import homepic1 from "./homepic1.png";
import Testimonials from "./Testimonials.js";
import "./Home.css";

const GOOGLE_CLIENT_ID = "32823633498-lv55i49eklchh7o1s494bdebe34stcsb.apps.googleusercontent.com";

const Home = ({ userId, handleLogin, handleLogout }) => {
  document.title = "Home";
  return (
    <div className="homepagecontainer">
      <div className="Homepic-container">
        <img className="Home-img" src={homepic1} />

        <div className="top-right">
          {userId ? (
            <GoogleLogout
              clientId={GOOGLE_CLIENT_ID}
              buttonText="Logout"
              onLogoutSuccess={handleLogout}
              onFailure={(err) => console.log(err)}
            />
          ) : (
            <GoogleLogin
              clientId={GOOGLE_CLIENT_ID}
              buttonText="Login"
              onSuccess={handleLogin}
              onFailure={(err) => console.log(err)}
            />
          )}
        </div>
        <div className="centered title-container"> Trying to apply to colleges in the US? </div>
        <div className="lower-centered">
          We're here to give you tips and tricks on how to successfully create a college application
          as an international student
        </div>

        <div className="homepagecontainer">
          <Testimonials />
        </div>
      </div>
    </div>
  );
};

export default Home;
