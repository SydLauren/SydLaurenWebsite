import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom'
import cx from 'classnames';
import navStyles from './index.module.scss';

const Navigation = () => {
  const match = useRouteMatch();
  return (
    <section className={navStyles.Navigation}>
      <button className={cx(navStyles.button, navStyles.blog)}><Link to={`${match.url}/blogs`}>Blog</Link></button>
      <button className={cx(navStyles.button, navStyles.sandbox)}><a href="https://codesandbox.io/u/SydLauren" target="blank">Sandboxes</a></button>
    </section>
  )
};

export default Navigation;