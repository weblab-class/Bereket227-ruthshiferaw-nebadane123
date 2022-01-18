import React from "react";
import NavBar from "../modules/NavBar";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import homepic from "./homepic1.PNG";
import Testimonials from "./Testimonials.js";
import "./Home.css";

const GOOGLE_CLIENT_ID = "32823633498-lv55i49eklchh7o1s494bdebe34stcsb.apps.googleusercontent.com";

const Home = ({ userId, handleLogin, handleLogout }) => {
  return (
    <div className="Homepic-container">
      <img className= "Home-img" src={homepic} />
        {/* <NavBar/> */}
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
      We're here to give you tips and tricks on how to successfully create a college application as an international student
      </div>
{/* <div> hi! </div> */}
      <Testimonials/>
    </div>
  );
};

export default Home;
