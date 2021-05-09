import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import appClass from './index.module.scss';
import { VERSION } from './constants';
import Navigation from './Navigation';
import LandingPage from './Landing';
import Blog from './Blog';

const SydLaurenV1 = () => {
  return (
    <div className={appClass.AppContainer}>
      <Navigation />
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
    </div>
  );
};

export default SydLaurenV1;
