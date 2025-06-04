import React from "react";

const ComingSoon = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-br from-black via-gray-900 to-gray-800 flex items-center justify-center px-4">
      <div className="text-center bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-2xl border border-white/20 max-w-xl w-full">
        <h1 className="text-5xl font-bold text-white mb-4 animate-pulse">
          🚀 Coming Soon
        </h1>
        <p className="text-gray-300 text-lg mb-6">
          We’re building something amazing. Stay tuned!
        </p>
        <div className="w-full mt-6">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded-md bg-white/80 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition-all duration-300"
          >
            Notify Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
