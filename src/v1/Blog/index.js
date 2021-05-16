import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  Link,
} from 'react-router-dom';
import Listing from './Listing';
import BlogPost from './Blog';
import { VERSION } from '../constants';

const Blog = () => {
  const match = useRouteMatch();
  return (
    <section style={{ padding: '50px'}}>
      <h1 style={{ fontSize: '3em'}}>My Blog</h1>
      <ul>
        <li>
          <button>
            <Link to={`/${VERSION}`}>Home</Link>
          </button>
        </li>
      </ul>
      <Router>
        <Switch>
          <Route path={`${match.url}/:postId`}>
            <ul>
              <li>
                <button>
                  <Link to={`/${VERSION}/blogs`}>Back to Blogs</Link>
                </button>
              </li>
            </ul>
            <BlogPost />
          </Route>
          <Route path={`${match.url}`}>
            <Listing />
          </Route>
        </Switch>
      </Router>
    </section>
  );
};

export default Blog;
