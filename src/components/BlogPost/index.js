import React from 'react'
import './style.css'

function BlogPost(props) {
  const blog = { // this is the sample blog
    title: "My First Post",
    author: "Chris Meah",
    datePosted: "20/11/2019",
    content: `
      A structure used in most apps and games.
      It's a way to keep doing the same.
      While a condition is true,
      Or for one to twenty-two.
      If endless, for errors we blame
      ..........
      Loop `,
    imageSrc: "https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    imageAlt: "A couple of coders."
    }

    return ( // this is what is returned to the app.js using the above info
    <div className="blog-post">
      <h2>{blog.title}</h2>
      <p>By {blog.author} on {blog.datePosted}</p>
      <img src={blog.imageSrc} alt={blog.imageAlt} />
      <small className="caption">{blog.imageAlt}</small>
      <p></p>
      <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      
    </div>
  );
}
  
export default BlogPost;
