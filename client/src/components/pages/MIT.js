import React from "react";
import "../../utilities.css";
import "./CollegeInfo.css";
import { Link } from "@reach/router";
import MITpic1 from "./images/MITpic1.jpg";

const MIT = () => {
  return (
    <div>
      <img className="MITimg" src={MITpic1} />
      <div>MIT University</div>
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
    </div>
  );
};

export default MIT;
