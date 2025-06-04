import React from 'react';
import { CircleHelp, GraduationCap, Presentation } from 'lucide-react';

const HowItWorks = () => {

  return (
    <section className="py-16">
      <div className="container flex flex-col items-start mx-auto px-4">
        <h2 className="text-3xl font-bold text-black text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Step 1 */}
          <div className="flex flex-col items-start text-left px-6 py-8 bg-white rounded-lg border-2 border-gray-300">
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <CircleHelp className="h-10 w-10 text-gray-900" />
            </div>
            <h3 className="text-xl text-black font-semibold mb-2">Answer Questions</h3>
            <p className="text-blue-800">Simply answer a few questions to understand your interests and goals.</p>
          </div>
          
          {/* Step 2 */}
          <div className="flex flex-col items-start text-left px-6 py-8 bg-white rounded-lg border-2 border-gray-300">
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Presentation className='h-10 w-10 text-gray-900'/>
            </div>
            <h3 className="text-xl text-black font-semibold mb-2">Get Your Career Match</h3>
            <p className="text-blue-800">Receive a Personalized Career Match based off your proile.</p>
          </div>
          
          {/* Step 3 */}
          <div className="flex flex-col items-start text-left px-6 py-8 bg-white rounded-lg border-2 border-gray-300">
            <div className="w-12 h- rounded-full flex items-start justify-center mb-4">
              <GraduationCap className='h-10 w-10 text-gray-900'/>
            </div>
            <h3 className="text-xl text-black font-semibold mb-2">Access Learning Resources</h3>
            <p className="text-blue-800">Explore curated Learning Resources and courses to kickstart your tech career.</p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;