import React from 'react';

const Navigation = () => {
  return (
    <section className={'navigation'}>
      <ul>
        <li><button onClick={() => console.log('go to blog')}>Blog</button></li>
        <li><button onClick={() => console.log('go to sandboxes')}>Sandboxes</button></li>
      </ul>
    </section>
  )
};

export default Navigation;