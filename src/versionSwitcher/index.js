import React from 'react';
import { Link } from 'react-router-dom';
import switchStyles from './versionSwitcher.module.scss';

const Switcher = () => {
  return (
    <div className={switchStyles.switchContainer}>
      <Link className={switchStyles.versionButton} to={'/v1/'}>
        <span>Version 1</span>
      </Link>
      <Link className={switchStyles.versionButton} to={'/v2/'}>
        <span>Version 2</span>
      </Link>
    </div>
  );
};

export default Switcher;
