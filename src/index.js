import React from 'react';
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import VersionSwitcher from './versionSwitcher';
import SydLaurenV1 from './v1';
import SydLaurenV2 from './v2';

const CURRENT_VERSION = 'v2';

ReactDOM.render(
  <section>
    <Router>
      <VersionSwitcher />
      <Switch>
        <Route path='/v1'>
          <SydLaurenV1 />
        </Route>
        <Route path='/v2'>
          <SydLaurenV2 />
        </Route>
        <Redirect from="/" to={`/${CURRENT_VERSION}`} />
      </Switch>
    </Router>,
  </section>,
  document.getElementById('root')
);
