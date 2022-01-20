import React from "react";


const SingleComment=(props) => {
    return (
                
        <span> 
            {/* <div className="u-bold"> {props.creator_name} </div> */}
            <span> {props.creator_name + ": " + props.content} </span>
        </span>
    );
};

export default SingleComment;