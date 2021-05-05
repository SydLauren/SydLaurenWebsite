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

const Blog = () => {
  const match = useRouteMatch();
  return (
    <section className={'main-section'}>
      <h1 className={'main-title'}>My Blog</h1>
      <ul>
        <li>
          <button>
            <Link to={'/'}>Home</Link>
          </button>
        </li>
      </ul>
      <Router>
        <Switch>
          <Route path={`${match.url}/:postId`}>
            <ul>
              <li>
                <button>
                  <Link to={'/blogs'}>Back to Blogs</Link>
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
