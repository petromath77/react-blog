import React from 'react';
import HomeHero from '../components/HomeHero';

const Home = props => {
  const { classadd } = props;

  return (
    <>
      <HomeHero classadd={classadd} />
    </>
  );
};

export default Home;