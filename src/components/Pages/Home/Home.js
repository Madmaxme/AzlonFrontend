import React from 'react';
import Hero from './Hero';
import WhatIsAzlon from './WhatIsAzlon';
import Features from './Features';
import HowItWorks from './HowItWorks';
import TargetUsers from './TargetUsers';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <WhatIsAzlon />
      <Features />
      <HowItWorks />
      <TargetUsers />
    </div>
  );
};

export default HomePage;