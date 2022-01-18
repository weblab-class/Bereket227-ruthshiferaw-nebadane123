import React, { useEffect, useState } from "react";
import SingleStory from "./SingleStory.js";
import CommentsBlock from "./CommentsBlock.js";

const Card=() => {
    const [comments, setComments] = useState([]);

    const addNewComment = (commentObj) => {
        setComments(comments.concat([commentObj]));
      };

return 
        <SingleStory/>
        // <CommentsBlock/> 
    

};

export default Card;