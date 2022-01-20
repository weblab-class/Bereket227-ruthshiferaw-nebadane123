import React from "react";


const SingleStory=(props) => {
    return(
        <div>
        <div className="u-bold"> {props.creator_name} </div>
        <p> {props.content} </p>
        </div>
        // <div className="u-bold"> bereket says hi </div>

    );
};

export default SingleStory;