// Result.jsx
import React from "react";
import { MapPin } from "lucide-react";

const Result = ({ answers }) => {
  const scoreMap = answers.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});

  const topCategory = Object.entries(scoreMap).sort(
    (a, b) => b[1] - a[1]
  )[0][0];

  const recommendations = {
    developer:
      "You might thrive as a Web Developer, Mobile Developer, or Software Engineer!",
    designer:
      "You could explore UI/UX Design, Graphic Design, or Product Design!",
    tester: "You may enjoy Quality Assurance, Game Testing, or Bug Hunting!",
    support:
      "Consider roles like Tech Support, Community Manager, or Customer Success!",
    product:
      "Look into Product Management, Project Coordination, or Operations!",
    marketing:
      "You might rock in Digital Marketing, Content Creation, or Brand Strategy!",
    data: "Explore paths like Data Analysis, Data Science, or BI!",
  };

  return (
    <section className="container flex flex-col justify-center items-center mx-auto px-4 ">
      <div className="max-w-xl mx-auto py-30 px-10 bg-white rounded-lg shadow-md text-center my-20">
        <h2 className="text-3xl font-bold mb-4">Your Tech Path Might Be:</h2>
        <p className="text-xl mb-6 text-blue-600 capitalize">{topCategory}</p>
        <p className="text-lg">{recommendations[topCategory]}</p>
        <p className="mt-6 text-sm text-gray-500">
          Remember, this is just a suggestion to spark your curiosity. Follow
          your interests and keep learning!
        </p>
      </div>

      <div className="container flex flex-col justify-center items-center mx-auto px-4 mb-12">
        <h3 className="text-center text-3xl font-bold mb-4">Explore The Following Top <br/>BootCamps Near you</h3>
        <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-4">
          <div className="flex flex-col gap-1 bg-white shadow-md pb-5 border-lg border-gray-300">
            <img src="/src/assets/software-developer.png" alt="" />
            <h4 className="text-lg font-semibold px-5">Software Engineering</h4>
            <p className="text-[13px] px-5">This is a thorough bootcamp where you'll dive into Web and Mobile development using modern frameworks like React, Next.js, Java etc</p>
            <p className="text-[12px] pt-5 px-5 text-blue-600">Location: Nairobi</p>
          </div>

          <div className="flex flex-col gap-1 bg-white shadow-md pb-5 border-lg border-gray-300">
            <img src="/src/assets/software-developer.png" alt="" />
            <h4 className="text-lg font-semibold px-5">Software Engineering</h4>
            <p className="text-[13px] px-5">This is a thorough bootcamp where you'll dive into Web and Mobile development using modern frameworks like React, Next.js, Java etc</p>
            <p className="text-[12px] pt-5 px-5 text-blue-600">Location: Nairobi</p>
          </div>

          <div className="flex flex-col gap-1 bg-white shadow-md pb-5 border-lg border-gray-300">
            <img src="/src/assets/software-developer.png" alt="" />
            <h4 className="text-lg font-semibold px-5">Software Engineering</h4>
            <p className="text-[13px] px-5">This is a thorough bootcamp where you'll dive into Web and Mobile development using modern frameworks like React, Next.js, Java etc</p>
            <p className="text-[12px] pt-5 px-5 text-blue-600">Location: Nairobi</p>
          </div>

          <div className="flex flex-col gap-1 bg-white shadow-md pb-5 border-lg border-gray-300">
            <img src="/src/assets/software-developer.png" alt="" />
            <h4 className="text-lg font-semibold px-5">Software Engineering</h4>
            <p className="text-[13px] px-5">This is a thorough bootcamp where you'll dive into Web and Mobile development using modern frameworks like React, Next.js, Java etc</p>
            <p className="text-[12px] pt-5 px-5 text-blue-600">Location: Nairobi</p>
          </div>

          
        </div>
      </div>
    </section>

  );
};

export default Result;
