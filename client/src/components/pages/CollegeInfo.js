import React from "react";
import "../../utilities.css";
import "./CollegeInfo.css";
import { Link } from "@reach/router";

const CollegeInfo = () => {
  return (
    <section className="allistcontainer">
      <div class="listitle">Find colleges that fit you here</div>
      <section className="collegecontainer">
        <section className="listitem">
          <div className="imageholder">
            <Link to="/CollegeInfo/columbia">
              {" "}
              <img scr="columbia.png" />
            </Link>
          </div>
          <div className="list name">Columbia University</div>
        </section>
        <section className="listitem">
          <div className="imageholder">
            <Link to="/CollgeInfo/Harvard">
              {" "}
              <img scr="harvard.png" />
            </Link>
          </div>
          <div className="list name">Harvard University</div>
        </section>
        <section className="listitem">
          <div className="imageholder">
            <Link to="/CollegeInfo/MIT">
              {" "}
              <img scr="MIT.png" />
            </Link>
          </div>
          <div className="list name">MIT</div>
        </section>
        <section className="listitem">
          <div className="imageholder">
            <Link to="/CollegeInfo/Princeton">
              {" "}
              <img scr="princeton.png" />
            </Link>
          </div>
          <div className="list name">Princeton University</div>
        </section>
        <section className="listitem">
          <div className="imageholder">
            <Link to="CollegeInfo/Stanford">
              {" "}
              <img scr="stanford.png" />
            </Link>
          </div>
          <div className="list name">Stanford University</div>
        </section>
        <section className="listitem">
          <div className="imageholder">
            <Link to="/CollegeInfo/Yale">
              {" "}
              <img scr="yale.png" />
            </Link>
          </div>
          <div className="list name">Yale University</div>
        </section>
      </section>
    </section>
  );
};
