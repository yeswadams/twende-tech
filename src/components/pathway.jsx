import React from 'react';

const careerPaths = [
  { title: 'Software Developer', image: '/src/assets/developer.png' }, // Replace with actual image paths
  { title: 'Data Analyst', image: '/src/assets/data-analyst.png' },
  { title: 'Cybersecurity Expert', image: '/src/assets/cybersecurity.png' },
  { title: 'UX/UI Designer', image: '/src/assets/ux-ui.png' },
  { title: 'Cloud Architect', image: '/src/assets/cloud-architect.png' },
  // Add more career paths as needed
];

const Pathway = () => {
  return (
    <section className="container mx-auto py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Career Path Preview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {careerPaths.map((path, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <img
              src={path.image}
              alt={path.title}
              className="w-32 h-32 object-cover rounded-full mb-4" // Adjust size and styling as needed
            />
            <h3 className="text-lg font-semibold">{path.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pathway;