import React from 'react';
import { useParams } from 'react-router-dom';
import posts from './blogs/posts.json'

const BlogPost = () => {
  const { postId } = useParams();
  return (
    <section style={{ fontSize: '1.8em' }}>
      <h1>{posts[postId].title}</h1>
      <p dangerouslySetInnerHTML={{ __html: posts[postId].body }} />
    </section>
  );
};

export default BlogPost;
