// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";
import commentData from "../../dummy-data"


const CommentSection = props => {
  // Add state for the comments
  const [comment,setComment] = useState(props.comment)

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      
      <CommentInput />
    </div>
  );
};

export default CommentSection;
