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
        <section className="listitem">
          <img className="img" src={columbia} />
          <div className="listname">Columbia University</div>
        </section>
        <section className="listitem">
          <img className="img" src={harvard} />
          <div className="listname">Harvard University</div>
        </section>
        <section className="listitem">
          <img className="img" src={MIT} />
          <div className="listname">MIT University</div>
        </section>
        <section className="listitem">
          <img className="img" src={princeton} />
          <div className="listname">Princeton University</div>
        </section>
        <section className="listitem">
          <img className="img" src={stanford} />
          <div className="listname">Stanford University</div>
        </section>
        <section className="listitem">
          <img className="img" src={yale} />
          <div className="listname">Yale University</div>
        </section>
      </section>
    </>
  );
};
export default CollegeInfo;
