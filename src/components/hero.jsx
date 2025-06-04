import React from 'react'
import heroBg from '../assets/hero-bg.png';

const Hero = () => {
  return (
    <div className="relative h-[700px] bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center py-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Let's Find the Right Tech Career for You</h1>
        <p className="text-xl mb-8">Discover your ideal tech career path with our guided quiz.</p>
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out">Start Your Quiz</button>
      </div>
    </div>
  )
}

export default Hero