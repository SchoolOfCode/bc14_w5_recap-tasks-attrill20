import React from "react";
import { useState } from "react";


function CommentForm(props) {
// put props in smoothies above

// deconstructed the props here
  const {setComments, comments } = props;

  const [author, setAuthor] = useState("Anon Author");
  const [comment, setComment] = useState("");

  // made this into a function...
  // to be called when pressing submit on the form
  function handleSubmit(event) {
    // prevent the default behaviour of the form (refreshing the page)
    event.preventDefault();
    setComments([...comments, { author: author, content: comment }]);
    // reset the form
    setAuthor("Anon Author");
    setComment("");
    }

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
          // add required to force an input
          required
        />
      </div>
      <div>
        <label htmlFor="comment">Comment</label>
        <textarea
          id="comment"
          value={comment}
          onChange={handleCommentChange}
           // add required to force an input
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default CommentForm;