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
import coo from "./coo.jpg";

const CollegeInfo = () => {
  return (
    <>
      <section className="collegecontainer">
        <div className="listitle">Find colleges that fit you here</div>
        <section>
          <div className="list name">Columbia University</div>
          <img className="img" scr={coo} />
        </section>
        <section>
          <div className="list name">Harvard University</div>
          <img className="img" scr={harvard} />
        </section>
        <section>
          <div className="list name">MIT University</div>
          <img className="img" scr={MIT} />
        </section>
        <section>
          <div className="list name">Princeton University</div>
          <img className="img" scr={princeton} />
        </section>
        <section>
          <div className="list name">Stanford University</div>
          <img className="img" scr={stanford} />
        </section>
        <section>
          <div className="list name">Yale University</div>
          <img className="img" scr={yale} />
        </section>
      </section>
    </>
  );
};
export default CollegeInfo;
