import React from 'react';
import LandingPageV1 from './v1';

const LandingPage = ({ version }) => {
  let landingEl;
  switch(version) {
    case('v1'):
      landingEl = <LandingPageV1 />;
      break;
    default:
      landingEl = <p>Ah boogers..</p>;
      break;
  }

  return landingEl;
}

export default LandingPage;