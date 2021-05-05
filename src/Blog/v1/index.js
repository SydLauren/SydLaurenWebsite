import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
import Listing from './Listing';
import BlogPost from './Blog'

const Blog = () => {
  const match = useRouteMatch();
  return (
    <>
      <section>
        <h1>My Blog</h1>
      </section>
      <Router>
        <Switch>
          <Route path={`${match.url}/:postId`}>
            <BlogPost />
          </Route>
          <Route path={`${match.url}`}>
            <Listing />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default Blog;
