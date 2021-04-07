import React from 'react';
import styles from './MusicHero.module.scss';
import Footer from '../Footer';
import Music from '../Music';

const MusicHero = () => {
  return (
    <>
      <section className={`section bg bg__pages`}>
        <div className="container">
          <Music />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default MusicHero;
