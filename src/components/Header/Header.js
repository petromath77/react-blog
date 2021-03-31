import React from 'react';
import styles from './Header.module.scss';
import Logo from '../../elements/Logo/Logo';
import Nav from '../Nav/Nav';

const Header = () => {
  return (
    <header className={styles.header}>
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
