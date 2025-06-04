import React from 'react';

const TestimonialCard = ({ image, name, testimonial, title }) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <img src={image} alt={name} className="w-12 h-12 rounded-full mb-2" />
      <p className="text-sm text-gray-500">{title}</p>
      <h4 className="mt-2 font-bold text-lg">{name}</h4>
      <p className="text-gray-700 italic">"{testimonial}"</p>
    </div>

);
  

export default TestimonialCard;