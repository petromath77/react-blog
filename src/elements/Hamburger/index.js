import React from 'react';
import './Hamburger.module.scss';

const Hamburger = props => {
  const { onClick, isActive } = props;
  return (
    <button
      className={`hamburger hamburger--collapse ${isActive ? 'is-active' : ''}`}
      type="button"
      onClick={onClick}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner" />
      </span>
    </button>
  );
};

export default Hamburger;
