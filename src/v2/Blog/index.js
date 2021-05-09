import React from 'react'; 
import BlogV1 from './v1';

const Blog = ({ version }) => {
  let BlogEl;
  switch(version) {
    case('v1'):
      BlogEl = <BlogV1 />;
      break;
    default:
      BlogEl = <p>Ah boogers...</p>;
      break;
  }

  return BlogEl;
}

export default Blog;