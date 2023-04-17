import React from 'react';
import './style.css';

function Comment(props) {
  const { author, content } = props;

  let initials = '';
  if (typeof author === 'string') {
    initials = author
      .split(' ')
      .map(name => name.charAt(0).toUpperCase())
      .join('');
  }

  return (
    <div className="comment">
      <div className="initials">{initials}</div>
      <div className="content">
        <p className="author">{author}</p>
        <p className="text">{content}</p>
      </div>
    </div>
  );
}

export default Comment;
