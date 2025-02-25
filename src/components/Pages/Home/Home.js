import React from 'react';
import Hero from './Hero';
import WhatIsAzlon from './WhatIsAzlon';
import Features from './Features';
import HomeHowItWorks from './HomeHowItWorks';
import TargetUsers from './TargetUsers';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <WhatIsAzlon />
      <Features />
      <HomeHowItWorks />
      <TargetUsers />
    </div>
  );
};

export default HomePage;