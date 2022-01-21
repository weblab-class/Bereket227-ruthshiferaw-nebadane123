import React from "react";

const SingleComment = (props) => {
  return (
    <div>
      {/* <div className="u-bold"> {props.creator_name} </div> */}
      <span> {props.creator_name + ": " + props.content} </span>
    </div>
  );
};

export default SingleComment;
