import React, { useEffect, useState } from "react";
import SingleStory from "./SingleStory.js";
import CommentsBlock from "./CommentsBlock.js";
import { get } from "../../utilities";
// import ThumbsUp from "./thumbsup.png";
// import {NewStory} from
import "./Card.css";

const Card = (props) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    get("/api/comment", { parent: props._id }).then((comments) => {
      setComments(comments);
    });
  }, []);

  const addNewComment = (commentObj) => {
    setComments(comments.concat([commentObj]));
  };

  return (
    <div className="Card-container">
      <SingleStory className="Card-story" _id={props._id} creator_name={props.creator_name} content={props.content} />
      {/* <img className= "bottom-right" src={ThumbsUp} /> */}
      {/* </SingleStory> */}
      <CommentsBlock story={props} comments={comments} addNewComment={addNewComment} />
    </div>
  );
};

export default Card;
