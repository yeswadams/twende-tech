import React from "react";
import { Flag, UsersRound, UserRound, Banknote } from "lucide-react";

const WhyTwendeTech = () => {
  return (
    <section className="py-16">
      <div className="container flex flex-col items-start mx-auto px-4">
        <h2 className="text-2xl font-bold text-black text-center mb-12">
          Why TwendeTech?
        </h2>
        <h1 className="text-4xl font-bold text-black text-center mb-12">
          Your Path to a Tech Career Start Here.
        </h1>
        <p className="text-gray-600">
          TwendeTech is designed to help Kenyan youth, students, and
          early-career professionals access and excel <br /> in sought-after
          tech careers.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 my-4">
          <div className="flex flex-col items-start text-left px-6 py-8 bg-white rounded-lg border-2 border-gray-300">
            {/* Placeholder Icon */}
            <div className="icon-placeholder ">
              <Flag className="h-10 w-10 text-gray-900 mb-2" />
            </div>
            <h3 className="font-bold text-black">Local Development Focus</h3>
            <p className="text-black">
              Content tailored to the Kenyan job market.
            </p>
          </div>
          <div className="flex flex-col items-start text-left px-6 py-8 bg-white rounded-lg border-2 border-gray-300">
            {/* Placeholder Icon */}
            <div className="icon-placeholder">
              <UsersRound className="h-10 w-10 text-gray-900 mb-2" />
            </div>
            <h3 className="font-bold text-black">Kenyan Market Focused</h3>
            <p className="text-black">
              Content tailored to the Kenyan job market.
            </p>
          </div>
          <div className="flex flex-col items-start text-left px-6 py-8 bg-white rounded-lg border-2 border-gray-300">
            <div className="icon-placeholder">
              <UserRound className="h-10 w-10 text-gray-900 mb-2" />
            </div>
            <h3 className="font-bold text-black">Personalized Approach</h3>
            <p className="text-black">
              Get tailored recommendations based on your unique profile.
            </p>
          </div>
          <div className="flex flex-col items-start text-left px-6 py-8 bg-white rounded-lg border-2 border-gray-300">
            <div className="icon-placeholder">
              <Banknote className="h-10 w-10 text-gray-900 mb-2" />
            </div>
            <h3 className="font-bold text-black">Free Access</h3>
            <p className="text-black">
              No cost to access resources and empowering your journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTwendeTech;
