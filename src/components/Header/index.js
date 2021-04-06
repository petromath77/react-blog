import React, { useState } from 'react';
import styles from './Header.module.scss';
import Logo from '../../elements/Logo';
import Nav from '../Nav';

const Header = () => {
  const [header, setHeader] = useState(false);

  const changeBackground = () => {
    (window.scrollY >= 50) ? setHeader(true) : setHeader(false);
  }
  
  window.addEventListener('scroll', changeBackground);

  return (
    <header className = { header ? `${styles.header} bg__black` : styles.header }>
      <div className="container">
        <div className={styles.wrapper}>
          <Logo />
          <Nav />
          <Nav mobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
