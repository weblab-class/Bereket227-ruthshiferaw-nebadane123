Skip to content
Search or jump to…
Pull requests
Issues
Marketplace
Explore
 
@nebadane123 
weblab-class
/
Bereket227-ruthshiferaw-nebadane123
Private
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
Settings
Bereket227-ruthshiferaw-nebadane123/client/src/components/App.js /
@nebadane123
nebadane123 college_help_for_internationals
Latest commit dc33fa0 19 hours ago
 History
 2 contributors
@nebadane123@Bereket227
71 lines (62 sloc)  2.07 KB
   
import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import NotFound from "./pages/NotFound.js";
// import Skeleton from "./pages/Skeleton.js";
import CollgeInfo from "./pages/CollegeInfo.js";
import Home from "./pages/Home.js";
import NavBar from "./modules/NavBar.js";
import Columbia from "./pages/Columbia.js";
import Harvard from "./pages/Harvard.js";
import Stanford from "./pages/Stanford.js";
import Yale from "./pages/Yale.js";
import MIT from "./pages/MIT.js";
import Princeton from "./pages/Princeton.js";

import "../utilities.css";

import { socket } from "../client-socket.js";

import { get, post } from "../utilities";
import CollegeInfo from "./pages/CollegeInfo.js";
import Forum from "./pages/Forum.js";

/**
 * Define the "App" component
 */
const App = () => {
  const [userId, setUserId] = useState(undefined);

  useEffect(() => {
    get("/api/whoami").then((user) => {
      if (user._id) {
        // they are registed in the database, and currently logged in.
        setUserId(user._id);
      }
    });
  }, []);

  const handleLogin = (res) => {
    console.log(`Logged in as ${res.profileObj.name}`);
    const userToken = res.tokenObj.id_token;
    post("/api/login", { token: userToken }).then((user) => {
      setUserId(user._id);
      post("/api/initsocket", { socketid: socket.id });
    });
  };

  const handleLogout = () => {
    setUserId(undefined);
    post("/api/logout");
  };

  return (
    <>
      <NavBar />
      <Router>
        <Home path="/" handleLogin={handleLogin} handleLogout={handleLogout} userId={userId} />
        <CollegeInfo path="/CollegeInfo" component={CollegeInfo} />
        <Forum path="/Forum/" component={Forum} />
        <Columbia path="/Columbia" component={Columbia} />
        <Harvard path="/Harvard" component={Harvard} />
        <MIT path="/MIT" />
        <Princeton path="/Princeton" component={Princeton} />
        <Stanford path="/Stanford" component={Stanford} />
        <Yale path="/Yale" component={Yale} />
        <NotFound default />
      </Router>
    </>
  );
};

export default App;
© 2022 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
