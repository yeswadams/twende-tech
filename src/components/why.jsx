import React from 'react'

const why = () => {
  const benefits = [
    { title: 'Local Development Focus', icon: '📊' }, // Placeholder icon
    { title: 'Keen Market Focus', icon: '💡' }, // Placeholder icon
    { title: 'Personalized Approach', icon: '⚙️' }, // Placeholder icon
    { title: 'Free Access', icon: '🔒' }, // Placeholder icon
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-2">Why TwendeTech</h2>
        <p className="text-xl text-gray-600 mb-12">Your Path to a Tech Career Starts Here</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
              {/* Placeholder for Icon */}
              <div className="text-4xl mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default why