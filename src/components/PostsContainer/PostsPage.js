//Complete the necessary code in this file
// import useState
import React,{useState} from "react";
import Post from "./Post";
import "./Posts.css";
import postData from "../../dummy-data"

const PostsPage = (props) => {
  // set up state for your data
  const [data] = useState(postData)

  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
     {data.map(p=>(
       <div>
         <Post post={p}/>
       </div>
     ))}
      
    </div>
  );
};

export default PostsPage;

