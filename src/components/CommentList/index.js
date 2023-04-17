import React from 'react';
import Comment from '../Comment';

function CommentList({ comments }) {
  return (
    <div>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          author={comment.author}
          content={comment.content}
        />
      ))}
    </div>
  );
}

export default CommentList;

