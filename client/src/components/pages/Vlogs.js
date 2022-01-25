import React, { useState } from "react";
import { Link } from "@reach/router";
import NavBar from "../modules/NavBar";

const Vlogs = () => {
  return (
    <div className="container">
      <form className="form-group">
        <input type="file" className="form-group" required />
      </form>

      <br></br>
      <button type="Submit" className="btn">
        UPLOAD
      </button>
      <br></br>
      <h4> View PDF</h4>
    </div>
  );
};

export default Vlogs;
