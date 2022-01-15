import React from "react";
import NavBar from "../modules/NavBar";
import GoogleLogin, { GoogleLogout } from "react-google-login";

const GOOGLE_CLIENT_ID = "32823633498-lv55i49eklchh7o1s494bdebe34stcsb.apps.googleusercontent.com";
const Home = ({ userId, handleLogin, handleLogout }) => {
  return (
    <div>
      <img src="college1 2.png" />
      {/* <NavBar /> */}
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
<div> home </div>
      {/* <reviewsfrompaststudents/> */}
    </div>
  );
};

export default Home;
