import React from 'react';
import { Link } from 'react-router-dom';


const BootCamps = ({ image, title, excerpt, }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600 text-sm mt-2">{excerpt}</p>
      <Link to='/'></Link>
    </div>
  </div>
);

export default BootCamps;
