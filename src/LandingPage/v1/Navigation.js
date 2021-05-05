import React from 'react';

const Navigation = () => {
  return (
    <section>
      <ul>
        <li><button onClick={() => console.log('go to blog')}>Blog</button></li>
        <li><button onClick={() => console.log('go to sandboxes')}>Sandboxes</button></li>
      </ul>
    </section>
  )
};

export default Navigation;