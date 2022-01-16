import React from "react";
import "../../utilities.css";
import "./CollegeInfo.css";
import { Link } from "@reach/router";
import columbia from "./columbia.png";
import harvard from "./harvard.png";
import stanford from "./stanford.png";
import MIT from "./MIT.png";
import princeton from "./princeton.png";
import yale from "./yale.png";

const CollegeInfo = () => {
  return (
    <section className="allistcontainer">
      <div class="listitle">Find colleges that fit you here</div>
      <section className="collegecontainer">
        <section className="listitem">
          <div className="imageholder">
            <Link to="/CollegeInfo/columbia">
              {" "}
              <img scr={columbia} />
            </Link>
          </div>
          <div className="list name">Columbia University</div>
        </section>
        <section className="listitem">
          <div className="imageholder">
            <Link to="/CollgeInfo/Harvard">
              {" "}
              <img scr={harvard} />
            </Link>
          </div>
          <div className="list name">Harvard University</div>
        </section>
        <section className="listitem">
          <div className="imageholder">
            <Link to="/CollegeInfo/MIT">
              {" "}
              <img scr={MIT} />
            </Link>
          </div>
          <div className="l ist name">MIT</div>
        </section>
        <section className="listitem">
          <div className="imageholder">
            <Link to="/CollegeInfo/Princeton">
              {" "}
              <img scr={princeton} />
            </Link>
          </div>
          <div className="list name">Princeton University</div>
        </section>
        <section className="listitem">
          <div className="imageholder">
            <Link to="CollegeInfo/Stanford">
              {" "}
              <img scr={stanford} />
            </Link>
          </div>
          <div className="list name">Stanford University</div>
        </section>
        <section className="listitem">
          <div className="imageholder">
            <Link to="/CollegeInfo/Yale">
              {" "}
              <img scr={yale} />
            </Link>
          </div>
          <div className="list name">Yale University</div>
        </section>
      </section>
    </section>
  );
};
