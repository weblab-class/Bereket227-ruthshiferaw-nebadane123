import React from "react";
import "../../utilities.css";
import "./CollegeInfo.css";
import { Link } from "@reach/router";

const Harvard = () => {
  return (
    <div>
      <div>Harvard University</div>
      <ol>
        <li>City,State- Cambridge, Massachussets</li>
        <li>Number of applicant- 42,749</li>
        <li>Acceptance rate- 5%</li>
        <li>Commonapp- Accepts</li>
        <li>TOEFL- Not required</li>
        <li>International Students- 18%</li>
        <li>Diversity- Diverse</li>
        <li>Financial aid- Gives full aid</li>
      </ol>
    </div>
  );
};

export default Harvard;
