import React from "react";

import "./Card.css";

const SingleStory = (props) => {
  return (
    <div>
      <div className="u-bold Card-storyUser"> {props.creator_name} </div>
      <p className="Card-storyContent"> {props.content} </p>
    </div>
  );
};

export default SingleStory;
