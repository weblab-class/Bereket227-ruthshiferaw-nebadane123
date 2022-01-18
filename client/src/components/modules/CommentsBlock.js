import React from "react";
import SingleComment from "./SingleComment.js";
import { NewComment } from "./NewPost.js";

/**
 * @typedef ContentObject
 * @property {string} _id of story/comment
 * @property {string} user_name
 * @property {string} content of the story/comment
 */

/**
 * Component that holds all the comments for a story
 *
 * Proptypes
 * @param {ContentObject[]} comments
 * @param {ContentObject} story
 */

const CommentsBlock = (props) => {
  return (
    <div className="Card-commentSection">
        Comments
      <div className="story-comments">
        {props.comments.map((comment) => (
          <SingleComment
            key={`SingleComment_${comment._id}`}
            _id={comment._id}
            creator_name={comment.creator_name}
            content={comment.content}
          />
        ))}
        {/* <NewComment storyId={props.story._id} addNewComment={props.addNewComment} /> */}
      </div>
    </div>
  );
};

export default CommentsBlock;