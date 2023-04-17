import React from 'react'
import './style.css'
import { blog } from '../../data/blogs'

    function BlogPost(props) {
      const { title, author, datePosted, content, imageSrc, imageAlt } = blog;

      return (
        <div className="blog-post">
          <h2>{title}</h2>
          <p>By {author} on {datePosted}</p>
          <img src={imageSrc} alt={imageAlt} />
          <small className="caption">{imageAlt}</small>
          <p></p>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      );
      
}
  
export default BlogPost;
