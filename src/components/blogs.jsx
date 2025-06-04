import React from "react";
import BlogCard from "../components/blogCard"; // adjust the path if needed

const Blogs = () => {
  const blogsData = [
    {
      id: 1,
      image: "/src/assets/blog1.png",
      title: "How to Build a Career in Tech",
      excerpt: "Discover essential tips for starting and growing your tech career in 2025...",
      author: "Adams Yeswa",
    },
    {
      id: 2,
      image: "/src/assets/blog2.png",
      title: "Why Learning React Can Boost Your Career",
      excerpt: "React is in demand, but why should you learn it? Let's break it down...",
      author: "Sarah Njeri",
    },
    {
      id: 3,
      image: "/src/assets/blog3.png",
      title: "Top 5 AI Tools Every Developer Should Know",
      excerpt: "AI is changing the game. Here are the top tools to stay ahead...",
      author: "Mike Otieno",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogsData.map((blog) => (
            <BlogCard
              key={blog.id}
              image={blog.image}
              title={blog.title}
              excerpt={blog.excerpt}
              author={blog.author}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
