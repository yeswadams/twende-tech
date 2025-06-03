import React from "react";

const SignupForm = () => {
  return (
    <form className="bg-white p-6 rounded text-black shadow space-y-4">
      <h2 className="text-xl font-bold text-center">Sign up</h2>
      <p className="text-sm text-gray-600 text-center">If you dont have an account, you will have to create one to proceed.</p>
      <input
        type="text"
        placeholder="Your Full Name"
        className="w-full px-3 py-2 border rounded"
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full px-3 py-2 border rounded"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full px-3 py-2 border rounded"
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Creat Account
      </button>
    </form>
  );
};

export default SignupForm;
