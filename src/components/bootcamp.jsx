import React from "react";
import BootCampCard from "./bootcampCard";


const bootcamp = () => {
  const BootCampsData = [
    {
      id: 1,
      image: "/src/assets/blog1.png",
      title: "How to Build a Career in Tech",
      excerpt:
        "Discover essential tips for starting and growing your tech career in 2025...",
    },
    {
      id: 2,
      image: "/src/assets/blog2.png",
      title: "Why Learning React Can Boost Your Career",
      excerpt:
        "React is in demand, but why should you learn it? Let's break it down...",
    },
    {
      id: 3,
      image: "/src/assets/blog3.png",
      title: "Top 5 AI Tools Every Developer Should Know",
      excerpt:
        "AI is changing the game. Here are the top tools to stay ahead...",
    },
    {
      id: 4,
      image: "/src/assets/blog4.png",
      title: "How to Build a Career in Tech",
      excerpt:
        "Discover essential tips for starting and growing your tech career in 2025...",
    },
  ];
  return (
    <section>
      <div className=" grid grid-col-4 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Bootcamps</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {BootCampData.map((bootcamp) => (
            <BootCampCard
              key={bootcamp.id}
              image={bootcamp.image}
              title={bootcamp.title}
              excerpt={bootcamp.excerpt}
            />
          ))}

        </div>
      </div>
    </section>
  );
};

export default bootcamp;
