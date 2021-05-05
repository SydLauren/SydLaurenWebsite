import React from 'react';
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './index.css';
import LandingPage from './Landing';
import Blog from './Blog';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path='blogs/:blogId'>
          <Blog />
        </Route>
        <Route path='/blogs'>
          <Blog version={'v1'} />
        </Route>
        <Route path='/'>
          <LandingPage version={'v1'} />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
