import React from "react";
import "../../utilities.css";
import "./CollegeInfo.css";
import { Link } from "@reach/router";

const Columbia = () => {
  return (
    <div>
      <div>Columbia University</div>
      <ol>
        <li>City,State- New York, New York</li>
        <li>Number of applicant- 40,572</li>
        <li>Acceptance rate- 6%</li>
        <li>Commonapp- Accepts</li>
        <li>TOEFL- Not required</li>
        <li>International Students- 18%</li>
        <li>Diversity- Diverse</li>
        <li>Financial aid- Gives full aid</li>
      </ol>
    </div>
  );
};

export default Columbia;
