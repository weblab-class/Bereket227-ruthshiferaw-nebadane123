import React from "react";
import "../../utilities.css";
import "./CollegeInfo.css";
const CollegeInfo = () => {
  return (
    <section className="allistcontainer">
      <div class="listitle">Find colleges that fit you here</div>
      <section className="collegecontainer">
        <section className="listitem">
          <div className="imageholder">
            <img scr="columbia.png" />
          </div>
          <div className="list name">Columbia University</div>
        </section>
        <section className="listitem">
          <div className="imageholder">
            <img scr="harvard.png" />
          </div>
          <div className="list name">Harvard University</div>
        </section>
        <section className="listitem">
          <div className="imageholder">
            <img scr="MIT.png" />
          </div>
          <div className="list name">MIT</div>
        </section>
        <section className="listitem">
          <div className="imageholder">
            <img></img>
          </div>
          <div className="list name">Princeton University</div>
        </section>
        <section className="listitem">
          <div className="imageholder">
            <img scr="princeton.png" />
          </div>
          <div className="list name">Stanford University</div>
        </section>
        <section className="listitem">
          <div className="imageholder">
            <img scr="yale.png" />
          </div>
          <div className="list name">Yale University</div>
        </section>
      </section>
    </section>
  );
};
