import React from "react";
import "../../utilities.css";
import "./CollegeInfo.css";
import { Link } from "@reach/router";
import harvardpic1 from "./images/harvardpic1.jpg";

const Harvard = () => {
  return (
    <div>
      <img className="harvardimg" src={harvardpic1} />
      <div>Harvard University</div>
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
  );
};

export default Harvard;
