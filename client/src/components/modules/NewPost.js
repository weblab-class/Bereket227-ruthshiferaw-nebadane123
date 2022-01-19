import React, { useState } from "react";
import { post } from "../../utilities";
import "./NewPost.css";



const NewPost=(props) => {
 const [value, setValue] = useState("");
 const handleChange = (event) => {
     setValue(event.target.value);
 };
 const handleSubmit = (event)=> {
    event.preventDefault();
    props.onSubmit && props.onSubmit(value);
    setValue("");
 };

 return (
    <div className="u-flex">
      <input
        type="text"
        // placeholder={props.defaultText}
        value={value}
        onChange={handleChange}
        className="NewPostInput-input"
      />
      <button
        type="submit"
        className="NewPostInput-button u-pointer"
        value="Submit"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>);
};
     
 

const NewStory = (props) => {
    const addPost = (value) => {
      const body = { content: value };
      post("/api/story", body).then((story) => {
          props.addNewPost(story);
      });
    };
  
    return <NewPost defaultText="Post Questions/Thoughts Here" onSubmit={addPost} />;
  };

  const NewComment = (props) => {
    const addComment = (value) => {
      const body = {parent: props.storyId, content: value };
      post("/api/comment", body).then((comment) => {
          props.addNewComment(comment);
      });
    };
  
    return <NewPost defaultText="Comment Here!" onSubmit={addComment} />;
  };

  export {NewStory, NewComment};
  
