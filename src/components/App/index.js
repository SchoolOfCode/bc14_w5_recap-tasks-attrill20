import React from 'react'
import { useState } from 'react'
import BlogPost from "../BlogPost";
import Comment from "../Comment";
import CommentForm from "../CommentForm";
import CommentList from "../CommentList";
import { blog } from "../../data/blogs";


function App() {
  const [comments, setComments] = useState([
      {
        id: "kskBC5HZ8qgNQUiW6If6q",
        author: "Billy Bootcamper",
        content: "Hello, great post",
      },
      {
        id: "jFyGAKz1VsGputO1gV8xa",
        author: "Chris Meah",
        content: "Many thank yous",
      },
  ]);
// commented this section out here 

  // const addComment = (author, comment) => {
  //   const newComment = {
  //     id: Math.random().toString(36).substr(2, 9),
  //     author,
  //     content: comment,
  //   };
  //   setComments([...comments, newComment]);
  // };


  return (
    
    <div>
      <BlogPost blog={blog} /> 
      <p></p>
      <CommentList comments= {comments} />
      {/* // removed the addcomment prop below */}
      <CommentForm setComments={setComments} comments={comments}/>
     
    </div>
  )
}

export default App;
