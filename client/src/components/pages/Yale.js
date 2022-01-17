import React from "react";
import "../../utilities.css";
import "./CollegeInfo.css";
import { Link } from "@reach/router";
import yalepic1 from "./images/yalepic1.jpg";

const Yale = () => {
  return (
    <div>
      <img className="insideimg" src={yalepic1} />
      <div>Yale University</div>
      <ul>
        <li>City,State- New Haven, Connecticut</li>
        <li>Number of applicant- 35,301</li>
        <li>Acceptance rate- 6%</li>
        <li>Commonapp- Accepts</li>
        <li>TOEFL- Required for internaitonals</li>
        <li>International Students- 17%</li>
        <li>Diversity- Diverse</li>
        <li>Financial aid- Gives full aid</li>
      </ul>
    </div>
  );
};

export default Yale;
