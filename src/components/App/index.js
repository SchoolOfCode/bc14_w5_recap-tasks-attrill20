import React from 'react'
import { useState } from 'react'
import BlogPost from "../BlogPost";
import Comment from "../Comment";
import CommentForm from "../CommentForm";
import CommentList from "../CommentList";
import { blog } from "../../data/blogs";


function App() {
  const [comments, setComments] = useState([]);

  const addComment = (author, comment) => {
    const newComment = {
      id: Math.random().toString(36).substr(2, 9),
      author,
      content: comment,
    };
    setComments([...comments, newComment]);
  };


  return (
    
    <div>
      <BlogPost blog={blog} /> 
      <p></p>
      <Comment author="Ben Lee" content="Hello, great post!" />
      <Comment author="Jane Ashley Green" content="I completely agree!" />
      <CommentList comments={comments} />
      <CommentForm onSubmit={addComment} />
     
  



    </div>
  )
}

export default App;
