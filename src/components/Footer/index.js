import React from 'react';
import Social from '../Social';
import Copyright from '../../elements/Copyright';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div class="container">
        <Social />
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
