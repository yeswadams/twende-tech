import React from 'react';

const HowItWorks = () => {
  return (<section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">How It Works</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="w-full md:w-1/3 lg:w-1/4 p-4 bg-white rounded-lg shadow-md">
            {/* Placeholder Icon */}
            <div className="w-12 h-12 mx-auto mb-4 bg-gray-300 rounded-full"></div>
            <h3 className="text-xl font-semibold mb-2">Answer Questions</h3>
            <p className="text-gray-600">Explore your interests and answer questions about your skills and preferences.</p>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 p-4 bg-white rounded-lg shadow-md">
            {/* Placeholder Icon */}
            <div className="w-12 h-12 mx-auto mb-4 bg-gray-300 rounded-full"></div>
            <h3 className="text-xl font-semibold mb-2">Get Your Career Match</h3>
            <p className="text-gray-600">Receive a curated list of tech careers based on your assessment results.</p>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 p-4 bg-white rounded-lg shadow-md">
            {/* Placeholder Icon */}
            <div className="w-12 h-12 mx-auto mb-4 bg-gray-300 rounded-full"></div>
            <h3 className="text-xl font-semibold mb-2">Access Learning Resources</h3>
            <p className="text-gray-600">Explore suggested learning materials and resources to start your journey.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;