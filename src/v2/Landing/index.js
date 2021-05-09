import React from 'react';
import Title from './Title';
import { landing } from './landing.module.scss';

const LandingPage = () => {
  return (
    <section className={landing}>
      <Title />
    </section>
  );
};

export default LandingPage;
