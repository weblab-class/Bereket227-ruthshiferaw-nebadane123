import React from "react";
import testimonialpic1 from "./testimonialpic1.png";
import "./testimonials.css";
import "./Home.css";

const Testimonials = (props) => {
  return (
    <div className="homepagecontainer">
      <span>
        <img className="Testimonial-img" src={testimonialpic1} />
        <section className="Testimonial-container">
          <div className="Testimonial-text">
            “Student Name: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at sodales
            ligula. Nunc sit amet ex eget sem cursus rhoncus a a orci. Vestibulum dictum condimentum
            posuere. Nam venenatis dolor tortor, a dapibus nulla semper at. Suspendisse pharetra
            urna quis”
          </div>
        </section>
      </span>
    </div>
  );
};

export default Testimonials;
