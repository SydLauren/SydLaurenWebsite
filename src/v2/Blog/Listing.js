import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import Breadcrumbs from '../components/breadcrumbs';
import { VERSION } from '../constants';
import posts from './blogs/posts.json';
import blogStyles from './blog.module.scss';

const Listing = () => {
  let match = useRouteMatch();

  return (
    <section>
      <Breadcrumbs
        crumbs={[
          {
            to: `/${VERSION}`,
            label: 'Home',
          },
        ]}
      />
      {Object.keys(posts).map(postId => {
        return (
          <p key={postId} className={blogStyles.blogEntry}>
            <Link to={`${match.url}/${postId}`}>{posts[postId].title}</Link> -{' '}
            {posts[postId].date}
          </p>
        );
      })}
    </section>
  );
};

export default Listing;
