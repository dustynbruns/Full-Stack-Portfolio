import React from 'react';
import Header from '../components/Profile';
import Skills from '../components/Skills';
import Capabilities from '../components/Capabilities';

const HomeScreen = () => {
  return (
    <div className="home-screen">
        <>
        <Header />
        <Skills />
        <Capabilities />
        </>
    </div>
  );
};

export default HomeScreen;
