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
import { Link } from "@reach/router";

const CollegeInfo = () => {
  document.title = "College Info";
  return (
    <>
      <div className="container">
        <section className="collegecontainer">
          <div className="listitle">Find colleges that fit you here</div>
          <section className="listitem">
            <Link to="/Columbia">
              <img className="img" src={columbia} />
            </Link>

            <div className="listname">Columbia University</div>
          </section>
          <section className="listitem">
            <Link to="/Harvard">
              <img className="img" src={harvard} />
            </Link>

            <div className="listname">Harvard University</div>
          </section>
          <section className="listitem">
            <Link to="/MIT">
              <img className="img" src={MIT} />
            </Link>

            <div className="listname">MIT</div>
          </section>
          <section className="listitem">
            <Link to="/Princeton">
              <img className="img" src={princeton} />
            </Link>

            <div className="listname">Princeton University</div>
          </section>
          <section className="listitem">
            <Link to="/Stanford">
              <img className="img" src={stanford} />
            </Link>

            <div className="listname">Stanford University</div>
          </section>
          <section className="listitem">
            <Link to="/Yale">
              <img className="img" src={yale} />
            </Link>

            <div className="listname">Yale University</div>
          </section>
        </section>
      </div>
    </>
  );
};
export default CollegeInfo;
