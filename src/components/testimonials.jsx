import React from 'react'

const Testimonials = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <img className="w-20 h-20 rounded-full object-cover mb-4" src="placeholder-image-url-1.jpg" alt="Sarah M." />
            <p className="text-gray-700 mb-4">"TwendeTech helped me discover my passion for front-end development and provided resources to get started."</p>
            <p className="font-bold text-gray-900">- Sarah M.</p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <img className="w-20 h-20 rounded-full object-cover mb-4" src="placeholder-image-url-2.jpg" alt="David K." />
            <p className="text-gray-700 mb-4">"I wasn't sure about my career path until I used TwendeTech. The quiz was spot on!"</p>
            <p className="font-bold text-gray-900">- David K.</p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <img className="w-20 h-20 rounded-full object-cover mb-4" src="placeholder-image-url-3.jpg" alt="Aisha R." />
            <p className="text-gray-700 mb-4">"Thanks to TwendeTech, I'm now pursuing a career I'm truly passionate about."</p>
            <p className="font-bold text-gray-900">- Aisha R.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;