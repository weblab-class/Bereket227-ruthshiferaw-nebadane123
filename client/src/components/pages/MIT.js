import React from "react";
import "../../utilities.css";
import "./CollegeInfo.css";
import { Link } from "@reach/router";

const MIT = () => {
  return (
    <div>
      <div>MIT University</div>
      <ol>
        <li>City,State- Cambridge, Massachussets</li>
        <li>Number of applicant- 21,706</li>
        <li>Acceptance rate- 7%</li>
        <li>Commonapp- Does not accept</li>
        <li>TOEFL- Not required</li>
        <li>International Students- 12%</li>
        <li>Diversity- Diverse</li>
        <li>Financial aid- Gives full aid</li>
      </ol>
    </div>
  );
};

export default MIT;
