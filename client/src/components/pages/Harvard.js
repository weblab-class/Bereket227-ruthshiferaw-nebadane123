import React from "react";
import "../../utilities.css";
import "./CollegeInfo.css";
import { Link } from "@reach/router";
import harvardpic1 from "./images/harvardpic1.jpg";
import "./harvard.css";
const Harvard = () => {
  return (
    <div>
      <img className="harvardimg" src={harvardpic1} />
      <div className="title">Harvard University</div>
      <div className="list">
        <ul>
          <li>City,State- Cambridge, Massachussets</li>
          <li>Number of applicant- 42,749</li>
          <li>Acceptance rate- 5%</li>
          <li>Commonapp- Accepts</li>
          <li>TOEFL- Not required</li>
          <li>International Students- 18%</li>
          <li>Diversity- Diverse</li>
          <li>Financial aid- Gives full aid</li>
        </ul>
      </div>
    </div>
  );
};

export default Harvard;
