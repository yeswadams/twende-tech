jsx
import React from 'react';

const HowItWorks = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-4">
              {/* Placeholder Icon 1 */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093C10.5 16.5 9.39 17 8 17s-2.5-1-2.5-2c0-1.102.806-2.076 1.934-2.564zm1.115-6.432c-.386.433-.61.953-.61 1.542 0 1.01.484 1.869 1.279 2.778A5.98 5.98 0 0112 10.713c-.854 0-1.652-.196-2.383-.568C8.23 9.106 7.5 8.097 7.5 7a4.5 4.5 0 01.945-2.808zM15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Answer Questions</h3>
            <p className="text-gray-600">Simply answer a few questions to understand your interests and goals.</p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-4">
              {/* Placeholder Icon 2 */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Get Your Career Match</h3>
            <p className="text-gray-600">Receive a personalized career match based on your responses.</p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-4">
              {/* Placeholder Icon 3 */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5S19.832 5.477 21 6.253v13C19.832 18.477 18.246 18 16.5 18s-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Explore Learning Resources</h3>
            <p className="text-gray-600">Explore curated learning resources and next steps for your chosen path.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;