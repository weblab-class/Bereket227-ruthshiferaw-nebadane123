import React from "react";

/**
 * @typedef ContentObject
 * @property {string} _id of story/comment
 * @property {string} user_name
 * @property {string} content of the story/comment
 */

const SingleComment=(props) => {
    return (
        <span>
        <div>{props.creator_name} </div>
        
        <div> {props.content}</div>
        </span>
    )
};

export default SingleComment;