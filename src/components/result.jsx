// Result.jsx
import React from "react";

const Result = ({ answers }) => {
  const scoreMap = answers.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});

  const topCategory = Object.entries(scoreMap).sort((a, b) => b[1] - a[1])[0][0];

  const recommendations = {
    developer: "You might thrive as a Web Developer, Mobile Developer, or Software Engineer!",
    designer: "You could explore UI/UX Design, Graphic Design, or Product Design!",
    tester: "You may enjoy Quality Assurance, Game Testing, or Bug Hunting!",
    support: "Consider roles like Tech Support, Community Manager, or Customer Success!",
    product: "Look into Product Management, Project Coordination, or Operations!",
    marketing: "You might rock in Digital Marketing, Content Creation, or Brand Strategy!",
    data: "Explore paths like Data Analysis, Data Science, or BI!",
  };

  return (
    <div className="max-w-xl mx-auto py-10 mt-30 px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Your Tech Path Might Be:</h2>
      <p className="text-xl mb-6 text-blue-600 capitalize">{topCategory}</p>
      <p className="text-lg">{recommendations[topCategory]}</p>
      <p className="mt-6 text-sm text-gray-500">Remember, this is just a suggestion to spark your curiosity. Follow your interests and keep learning!</p>
    </div>
  );
};

export default Result;
