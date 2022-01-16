import React from "react";
import "../../utilities.css";
import "./CollegeInfo.css";
import { Link } from "@reach/router";

const Stanford = () => {
  return (
    <div>
      <div>Stanford University</div>
      <ol>
        <li>City,State- Stanford, California</li>
        <li>Number of applicant- 47,452</li>
        <li>Acceptance rate- 4%</li>
        <li>Commonapp- Accepts</li>
        <li>TOEFL- Not required</li>
        <li>International Students- 15%</li>
        <li>Diversity- Diverse</li>
        <li>Financial aid- Gives full aid</li>
      </ol>
    </div>
  );
};

export default Stanford;
