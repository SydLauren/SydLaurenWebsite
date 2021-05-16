import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './index.module.scss';
import LandingPage from './Landing';
import Blog from './Blog';

const SydLaurenV1 = () => {
  const VERSION = 'v1';
  return (
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
  );
};

export default SydLaurenV1;
