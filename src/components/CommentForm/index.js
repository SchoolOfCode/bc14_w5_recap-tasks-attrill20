import { useState } from "react";
import React from 'react'

function CommentForm({ props }) {
  const {setComments, comments } = props;
  const [author, setAuthor] = useState("Anon Author");
  const [comment, setComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (comment.trim() !== "") {
      setComments([...comments, { author: author, content: comment }]);
      setComment("");
    }
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="author">Author</label>
        <input
          id="author"
          type="text"
          value={author}
          onChange={handleAuthorChange}
        />
      </div>
      <div>
        <label htmlFor="comment">Comment</label>
        <textarea
          id="comment"
          value={comment}
          onChange={handleCommentChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default CommentForm;