import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom'
import { navigation } from './landing.module.css';

const Navigation = () => {
  const match = useRouteMatch();
  return (
    <section className={navigation}>
      <ul>
        <li><button><Link to={`${match.url}/blogs`}>Blog</Link></button></li>
        <li><button><a href="https://codesandbox.io/u/cat_banana" target="blank">Sandboxes</a></button></li>
      </ul>
    </section>
  )
};

export default Navigation;