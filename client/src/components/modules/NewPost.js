import React, { useState } from "react";

/**
 * @typedef ContentObject
 * @property {string} _id of story/comment
 * @property {string} user_name
 * @property {string} content of the story/comment
 */

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
        placeholder={props.defaultText}
        value={value}
        onChange={handleChange}
        // className="NewPostInput-input"
      />
      <button
        type="submit"
        // className="NewPostInput-button u-pointer"
        value="Submit"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>);
};
// return (
//     <div>
//     <input
    
//     />
//     <button>
//      Submit
//     </button>

//     </div>
// )

// const NewStory=() => {
//  const addStory=() => {

//  }
// }

const NewStory = (props) => {
    const addStory = (value) => {
      const body = { content: value };
      post("/api/story", body).then((story) => {
        // display this story on the screen
        props.addNewStory(story);
      });
    };
  
    return <NewPostInput defaultText="New Story" onSubmit={addStory} />;
  };

  export default NewStory;
  
