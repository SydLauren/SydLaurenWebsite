import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import posts from '../blogs/posts.json';

const Listing = () => {
  let match = useRouteMatch();

  return (
    <section>
      {Object.keys(posts).map(postId => {
        return <p key={postId}><Link to={`${match.url}/${postId}`}>{posts[postId].title}</Link> - {posts[postId].date}</p>
      })}
    </section>
  )
}

export default Listing;