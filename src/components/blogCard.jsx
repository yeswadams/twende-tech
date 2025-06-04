import React from 'react';


const BlogCard = ({ image, title, excerpt, author }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600 text-sm mt-2">{excerpt}</p>
      <p className="text-sm mt-4 text-blue-600 font-medium">By {author}</p>
    </div>
  </div>
);

export default BlogCard;
