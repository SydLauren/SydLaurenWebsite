import React from 'react';
import Title from './Title';
import Navigation from './Navigation';
import './landing.css';

const LandingPage = () => {
  return (
    <section className={'main-section'}>
      <Title />
      <Navigation />
    </section>
  );
};

export default LandingPage;
