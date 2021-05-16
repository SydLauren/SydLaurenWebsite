import React from 'react';
import { Link } from 'react-router-dom';
import crumbStyles from './breadcrumbs.module.scss';

const Breadcrumbs = ({ crumbs }) => {
  return (
    <div className={crumbStyles.container}>
      {crumbs.map((crumb, idx) => {
        return (
          <div className={crumbStyles.crumb} key={`crumb-${idx}`}>
            <Link to={crumb.to}><span className={crumbStyles.textLink}>{crumb.label}</span></Link>
            {idx < crumbs.length - 1 && <p className={crumbStyles.separator}>{'>'}</p>}
          </div>
        )
      })}
    </div>
  )
}

export default Breadcrumbs;