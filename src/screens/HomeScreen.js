import React from 'react';
import Header from '../components/Profile';
import Skills from '../components/Skills';
import Capabilities from '../components/Capabilities';
import ParticlesBg from 'particles-bg';

const HomeScreen = () => {
  return (
    <div className="home-screen">
      <>
        <Header />
        <Skills />
        <Capabilities />
      </>
      <ParticlesBg type="cobweb" color="#ffffff" num={50} bg={true} />
    </div>
  );
};

export default HomeScreen;
