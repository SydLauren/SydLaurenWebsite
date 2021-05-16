import React from 'react';
import { Link } from 'react-router-dom'
import { navigation } from './landing.module.css';

const Navigation = () => {
  return (
    <section className={navigation}>
      <ul>
        <li><button><Link to={`/v1/blogs`}>Blog</Link></button></li>
        <li><button><a href="https://codesandbox.io/u/cat_banana" target="blank">Sandboxes</a></button></li>
      </ul>
    </section>
  )
};

export default Navigation;