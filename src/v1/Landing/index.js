import React from 'react';
import Title from './Title';
import Navigation from './Navigation';
import { mainSection } from '../index.module.scss';

const LandingPage = () => {
  return (
    <section className={mainSection}>
      <Title />
      <Navigation />
    </section>
  );
};

export default LandingPage;
