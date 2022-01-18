import React from "react";


const SingleComment=(props) => {
    return (
                
        <span> 
            <div className="u-bold"> {props.creator_name} </div>
            <div> {props.content}</div>
        </span>
    );
};

export default SingleComment;