import React from 'react';
import Hero from '../components/hero';
import HowItWorks from '../components/howItWorks'
import WhyTwendeTech from '../components/WhyTwendeTech'
import CareerPathPreview from '../components/CareerPathPreview'
import Testimonials from '../components/testimonials'
import Blogs from '../components/blogs'
import Footer from '../components/footer'

const home = () => {
  return (
    <>
      <Hero />
      {/* How It Works Section */}
      <HowItWorks /> 
      <WhyTwendeTech />
      <CareerPathPreview /> 
      <Testimonials /> 
      <Blogs />
      <Footer />

    </>
  );
};

export default home;