import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom'
import cx from 'classnames';
import navStyles from './index.module.scss';

const Navigation = () => {
  const match = useRouteMatch();
  return (
    <section className={navStyles.Navigation}>
      <div className={cx(navStyles.key, navStyles.key1)}><Link to={`${match.url}/blogs`}>Blog</Link></div>
      <div className={cx(navStyles.key, navStyles.key2)}><a href="https://codesandbox.io/u/SydLauren" target="blank">Sand-boxes</a></div>
      <div className={cx(navStyles.key, navStyles.key3)}></div>
      <div className={cx(navStyles.key, navStyles.key4)}></div>
      <div className={cx(navStyles.key, navStyles.key5)}></div>
    </section>
  )
};

export default Navigation;