import React from 'react';
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SydLaurenV1 from './v1';
import SydLaurenV2 from './v2';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path='/v1'>
        <SydLaurenV1 />
      </Route>
      <Route path='/v2'>
        <SydLaurenV2 />
      </Route>
      <Route path='/'>
        <SydLaurenV2 />
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root')
);
