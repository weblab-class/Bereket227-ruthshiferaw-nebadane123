import React from "react";
import "../../utilities.css";
import "./CollegeInfo.css";
import { Link } from "@reach/router";
import princetonpic1 from "./images/princetonpic1.jpg";

const Princeton = () => {
  return (
    <div>
      <img className="princetonimg" src={princetonpic1} />
      <div className="title">Princeton University</div>
      <div className="list">
        <ul>
          <li>City,State- Princeton, New Jersey</li>
          <li>Number of applicant- 35,370</li>
          <li>Acceptance rate- 5%</li>
          <li>Commonapp- Accepts</li>
          <li>TOEFL- Required for internationals</li>
          <li>International Students- 12%</li>
          <li>Diversity- Diverse</li>
          <li>Financial aid- Gives full aid</li>
        </ul>
        <div className="addinfo">
          {
            <a href="https://admission.princeton.edu/how-apply">
              For further information click here
            </a>
          }
        </div>
      </div>
    </div>
  );
};

export default Princeton;
