import React from "react";

/**
 * @typedef ContentObject
 * @property {string} _id of story/comment
 * @property {string} user_name
 * @property {string} content of the story/comment
 */

const SingleStory=(props) => {
    return(
        <div>
        <div> {props.user_name} </div>
        <p> {props.content} </p>
        </div>
        // <div className="u-bold"> bereket says hi </div>

    );
};

export default SingleStory;