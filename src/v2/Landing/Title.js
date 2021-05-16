import React from 'react';
import { title, subtitle, card, landingArea } from './landing.module.scss';

const Title = () => {
  return (
    <section className={landingArea}>
      <div className={card}></div>
      <h1 className={title}>
        Hi,
        <br />
        I'm Sydney Lauren Flak
      </h1>
      <p className={subtitle}>Welcome to my website 🔥</p>
    </section>
  );
};

export default Title;
