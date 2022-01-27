import React from "react";

const SingleComment = (props) => {
  return (
    <div>
      <span> {props.creator_name + ": " + props.content} </span>
    </div>
  );
};

export default SingleComment;
