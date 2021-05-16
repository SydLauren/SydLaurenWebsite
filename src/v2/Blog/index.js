import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Listing from './Listing';
import BlogPost from './Blog';
import { VERSION } from '../constants';
import blogStyles from './blog.module.scss';

const Blog = () => {
  return (
    <section  className={blogStyles.blogSection}>
      <h1 className={blogStyles.heading2}>My Blog</h1>
      <Switch>
        <Route path={`/${VERSION}/blogs/:postId`}>
          <BlogPost />
        </Route>
        <Route path={`/${VERSION}/blogs`}>
          <Listing />
        </Route>
      </Switch>
    </section>
  );
};

export default Blog;
