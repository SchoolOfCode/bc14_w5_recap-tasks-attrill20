import React from 'react';
import './style.css';

function Comment(props) { // define the props
  const { author, content } = props;
  const initials = author
    .split(' ')
    .map(name => name.charAt(0).toUpperCase())
    .join('');

  return ( // this is what is returned to the app.js using the above info
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
