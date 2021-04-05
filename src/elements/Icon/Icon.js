import React from 'react';
import sprite from '../Icon/images/social-sprite.svg'

const Icon = props => {
  const { className, icon, viewBox } = props;

  return (
    <svg viewBox={viewBox} className={`${className} icon icon-${icon} svg`}>
      <use xlinkHref={`${sprite}#${icon}`} />
    </svg>
  );
};

export default Icon;
