import React from "react";
import "../../utilities.css";
import "./CollegeInfo.css";
import { Link } from "@reach/router";
import yalepic1 from "./images/yalepic1.jpg";
import "./yale.css";

const Yale = () => {
  return (
    <div>
      <img className="yaleimg" src={yalepic1} />
      <div className="title">Yale University</div>
      <div className="list">
        <ul>
          <li>City,State- New Haven, Connecticut</li>
          <li>Number of applicant- 35,301</li>
          <li>Acceptance rate- 6%</li>
          <li>Commonapp- Accepts</li>
          <li>TOEFL- Required for internaitonals</li>
          <li>International Students- 17%</li>
          <li>Diversity- Diverse</li>
          <li>Financial aid- Gives full aid</li>
        </ul>
        <div className="addinfo">
          {
            <a href="https://admissions.yale.edu/first-year-application-process">
              For further information click here
            </a>
          }
        </div>
      </div>
    </div>
  );
};

export default Yale;
