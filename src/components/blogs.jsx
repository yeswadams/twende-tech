import React from 'react';
import BlogCard from "../components/blogCard"


const Blogs = () => {
  const blogsData = [
    {
      id: 1,
      image: "../assets/testimonials2.png",
      title: "How to Grow Your Tech Career in 2025",
      description: "Discover the latest trends and strategies for a successful tech career in 2025.",
      author: "By Adam",
      date: "2023-08-15",

    },

    {
      id: 2,
      image: "../assets/testimonials2.png",
      title: "How to Grow Your Tech Career in 2025",
      description: "Discover the latest trends and strategies for a successful tech career in 2025.",
      author: "By Adam",
      date: "2023-08-15",

    },

    {
      id: 3,
      image: "../assets/testimonials2.png",
      title: "How to Grow Your Tech Career in 2025",
      description: "Discover the latest trends and strategies for a successful tech career in 2025.",
      author: "By Adam",
      date: "2023-08-15",

    },
  ];

  return (
    <section className="py-16">
      <div className='container flex flex-col items-start mx-auto px-4'>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {blogsData.map((blog) => (
            <BlogCard
              key={blog.id}
              image={blog.image}
              title={blog.title}
              description={blog.descritpion}
              date={blog.date}
            />
          ))}

        </div>

      </div>
      
    </section>
  );
};

export default Blogs;