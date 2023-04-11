import React from 'react';
import Profile from '../components/Profile';
import Skills from '../components/Skills';
import Capabilities from '../components/Capabilities';
import ParticlesBg from 'particles-bg';
import '../styles/HomeScreen.css';

const HomeScreen = () => {
  return (
    <div className="home-screen">
        <Profile />
        <Skills />
        <Capabilities />
      <ParticlesBg type="cobweb" color="#ffffff" num={400} bg={true} />
    </div>
  );
};

export default HomeScreen;
