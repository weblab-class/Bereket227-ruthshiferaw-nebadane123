import React from "react";
import "../../utilities.css";
import "./CollegeInfo.css";
import { Link } from "@reach/router";
import MITpic1 from "./images/MITpic1.jpg";
import "./MIT.css";

const MIT = () => {
  return (
    <div className="whole">
      <img className="MITimg" src={MITpic1} />
      <div className="title">MIT</div>
      <div className="list">
        <ul>
          <li>City,State- Cambridge, Massachussets</li>
          <li>Number of applicant- 21,706</li>
          <li>Acceptance rate- 7%</li>
          <li>Commonapp- Does not accept</li>
          <li>TOEFL- Not required</li>
          <li>International Students- 12%</li>
          <li>Diversity- Diverse</li>
          <li>Financial aid- Gives full aid</li>
        </ul>
        <div className="addinfo">
          {
            <a href="https://mitadmissions.org/apply/firstyear/deadlines-requirements/">
              For further information click here
            </a>
          }
        </div>
      </div>
    </div>
  );
};

export default MIT;
