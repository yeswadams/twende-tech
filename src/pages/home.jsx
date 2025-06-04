import React from 'react';
import Hero from '../components/hero';
import HowItWorks from '../components/howItWorks'
import WhyTwendeTech from '../components/WhyTwendeTech'

const home = () => {
  return (
    <>
      <Hero />
      {/* How It Works Section */}
      <HowItWorks /> 
      
      <WhyTwendeTech />

      {/* Career Path Preview Section */}
      {/* <CareerPathPreview /> */}

      {/* Testimonials Section */}
      {/* <Testimonials /> */}

      {/* App Preview Section */}
      {/* <AppPreview /> */}

    </>
  );
};

export default home;