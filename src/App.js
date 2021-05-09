import React from 'react';
import SydLaurenV1 from './v1';

const App = () => {
  let appVersion = 'v1';
  switch(appVersion) {
    case('v1'):
      appVersion = <SydLaurenV1 />;
      break;
    default:
      appVersion = <p>Ahh boogers...</p>
  }

  return appVersion;
}

export default App;