import React from 'react';
import { mainTitle } from '../index.module.scss';
import { landingSubtitle } from './landing.module.css';


const Title = () => {
  return (
    <section>
      <h1 className={mainTitle}>
        Hi,
        <br />
        I'm Sydney Lauren Flak
      </h1>
      <p className={landingSubtitle}>Welcome to my website 🔥</p>
    </section>
  );
};

export default Title;
