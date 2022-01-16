import React from "react";
import "../../utilities.css";
import "./CollegeInfo.css";
import { Link } from "@reach/router";

const Princeton = () => {
  return (
    <div>
      <div>Princeton University</div>
      <ol>
        <li>City,State- Princeton, New Jersey</li>
        <li>Number of applicant- 35,370</li>
        <li>Acceptance rate- 5%</li>
        <li>Commonapp- Accepts</li>
        <li>TOEFL- Required for internationals</li>
        <li>International Students- 12%</li>
        <li>Diversity- Diverse</li>
        <li>Financial aid- Gives full aid</li>
      </ol>
    </div>
  );
};

export default Princeton;
