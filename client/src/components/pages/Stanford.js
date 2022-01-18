import React from "react";
import "../../utilities.css";
import "./CollegeInfo.css";
import { Link } from "@reach/router";
import stanfordpic1 from "./images/stanfordpic1.jpg";
import "./stanford.css";

const Stanford = () => {
  return (
    <div>
      <img className="stanfordimg" src={stanfordpic1} />
      <div className="title">Stanford University</div>
      <div className="list">
        <ul>
          <li>City,State- Stanford, California</li>
          <li>Number of applicant- 47,452</li>
          <li>Acceptance rate- 4%</li>
          <li>Commonapp- Accepts</li>
          <li>TOEFL- Not required</li>
          <li>International Students- 15%</li>
          <li>Diversity- Diverse</li>
          <li>Financial aid- Gives full aid</li>
        </ul>
        <div className="addinfo">
          {<a href="https://admission.stanford.edu/apply/">For further information click here</a>}
        </div>
      </div>
    </div>
  );
};

export default Stanford;
