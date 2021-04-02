import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Logo.module.scss';
import logo from './images/logo.png';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link to="/" className={styles.link} title="Homepage">
        <img className={styles.img} src={logo} alt="Logo" />
      </Link>
    </div>
  );
};

export default Logo;
