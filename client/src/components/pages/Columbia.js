import React from "react";
import "../../utilities.css";
import "./CollegeInfo.css";
import { Link } from "@reach/router";
import columbiapic1 from "./images/columbiapic1.jpg";
import "./columbia.css";

const Columbia = () => {
  return (
    <div>
      <img className="columbiaimg" src={columbiapic1} />
      <div className="title">Columbia University</div>
      <div className="list">
        <ul>
          <li>City,State- New York, New York</li>
          <li>Number of applicant- 40,572</li>
          <li>Acceptance rate- 6%</li>
          <li>Commonapp- Accepts</li>
          <li>TOEFL- Not required</li>
          <li>International Students- 18%</li>
          <li>Diversity- Diverse</li>
          <li>Financial aid- Gives full aid</li>
        </ul>

        <div className="addinfo">
          {
            <a href="https://undergrad.admissions.columbia.edu/apply">
              For further information click here
            </a>
          }
        </div>
      </div>
    </div>
  );
};

export default Columbia;
