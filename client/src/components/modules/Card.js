import React, { useEffect, useState } from "react";
import SingleStory from "./SingleStory.js";
import CommentsBlock from "./CommentsBlock.js";
import { get } from "../../utilities";

import "./Card.css";

const Card=(props) => {
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
          <SingleStory _id={props._id} creator_name={props.creator_name} content={props.content} />
          <CommentsBlock story={props} comments={comments} addNewComment={addNewComment} />
        </div>
      );
    };
    
    export default Card;
    
