import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import posts from '../blogs/posts.json';

const Listing = () => {
  let match = useRouteMatch();

  return (
    <section>
      {Object.keys(posts).map(postId => {
        return <Link to={`${match.url}/${postId}`}>{posts[postId].title}</Link>
      })}
    </section>
  )
}

export default Listing;