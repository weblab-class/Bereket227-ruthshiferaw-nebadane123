import React from "react";
import "../../utilities.css";
import "./CollegeInfo.css";
import NavBar from "../modules/NavBar";
import columbia from "./columbia.png";
import harvard from "./harvard.png";
import stanford from "./stanford.png";
import MIT from "./MIT.png";
import princeton from "./princeton.png";
import yale from "./yale.png";

const CollegeInfo = () => {
  return (
    <>
      <section className="collegecontainer">
        <div className="listitle">Find colleges that fit you here</div>
        <div className="list name">Columbia University</div>
        <div className="list name">Harvard University</div>
        <div className="list name">MIT University</div>
        <div className="list name">Princeton University</div>
        <div className="list name">Stanford University</div>
        <div className="list name">Yale University</div>
      </section>
    </>
  );
};
export default CollegeInfo;
