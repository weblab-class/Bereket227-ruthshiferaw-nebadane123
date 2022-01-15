import React from "react";
import NavBar from "../modules/NavBar";

const Home=({ userId, handleLogin, handleLogout }) => {
    return(
        <div>
        <img src= "college1 2.png"/>
        <NavBar/>
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
        

        {/* <reviewsfrompaststudents/> */}
        </div>
    )
};

export default Home;