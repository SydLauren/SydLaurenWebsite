import React from 'react';
import Title from './Title';
import Navigation from './Navigation';
import './landing-page.css';

const LandingPage = () => {
  return (
    <section className={"landing-section"}>
      <Title />
      <Navigation />
    </section>
  );
};

export default LandingPage;