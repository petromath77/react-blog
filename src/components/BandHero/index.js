import React from 'react';
import Footer from '../Footer';
import Bio from '../Bio';

const BandHero = () => {
  return (
    <>
      <section className={`section bg bg__pages`}>
        <div className="container">
          <Bio />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BandHero;
