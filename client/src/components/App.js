import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import NotFound from "./pages/NotFound.js";
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
import Resources from "./pages/Resources.js";

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
        <Forum path="/Forum/" component={Forum} userId={userId} />
        <Resources path="/Resources/" component={Resources} userId={userId} />
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
