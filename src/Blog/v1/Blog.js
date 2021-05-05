import React from 'react';
import { useParams } from 'react-router-dom';
import posts from '../blogs/posts.json';

const BlogPost = () => {
  const { postId } = useParams();
  return (
    <section>
      <h1>{posts[postId].title}</h1>
      <pre>{posts[postId].body}</pre>
    </section>
  )
}

export default BlogPost;