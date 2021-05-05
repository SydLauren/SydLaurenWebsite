import React from 'react';
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <section className={'navigation'}>
      <ul>
        <li><button><Link to={'/blogs'}>Blog</Link></button></li>
        <li><button><a href="https://codesandbox.io/u/cat_banana" target="blank">Sandboxes</a></button></li>
      </ul>
    </section>
  )
};

export default Navigation;