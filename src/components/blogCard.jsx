import React from 'react';

const BlogCard = ({ image, title, description, author, date }) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <img src={image} alt={title} className=" w-full rounded-t-lg object-cover mb-4" />
      <p className="text-sm text-gray-500">{title}</p>
      <h4 className="mt-2 font-bold text-lg">{description}</h4>
      <p className="text-gray-700 italic">"{author}"</p>
      <p className="text-gray-700 italic">"{date}"</p>
    </div>

);
  

export default BlogCard;