import React, {useState} from "react";
// import ThumbsUp from "./thumbsup.png";
import "./Card.css";
import Reactions from "./Reactions.js";

const SingleStory = (props) => {
  const [numLikes, setNumLikes] = useState(0);
  const incrementNumLikes = () => {
    setNumLikes(numLikes + 1);
  };
  return (
    <div onClick={() => {
      incrementNumLikes();
    }} >
      <div className="u-bold Card-storyUser"> {props.creator_name} </div>
      <p className="Card-storyContent"> {props.content} </p>
      {/* <div className= "reaction-container">
      <img className= "thumbs-up" src={ThumbsUp} />
      </div> */}
      {/* <Reactions/> */}
    </div>
    // <div className="u-bold"> bereket says hi </div>
  );
};

export default SingleStory;
