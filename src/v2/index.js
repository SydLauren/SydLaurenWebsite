import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './index.css';
import { VERSION } from './constants';
import LandingPage from './Landing';
import Blog from './Blog';

const SydLaurenV1 = () => {
  return (
      <React.StrictMode>
      <Router>
        <Switch>
          <Route path={`/${VERSION}/blogs/:blogId`}>
            <Blog />
          </Route>
          <Route path={`/${VERSION}/blogs`}>
            <Blog />
          </Route>
          <Route path={`/${VERSION}`}>
            <LandingPage />
          </Route>
        </Switch>
      </Router>
    </React.StrictMode>
  )
}

export default SydLaurenV1;