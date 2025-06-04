import { useState } from "react";
import LoginForm from "../components/loginForm";
import SignupForm from "../components/SignupForm";

const AuthPage = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className= "grid grid-cols-1 md:grid-cols-2 ">
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h2 className="text-3xl font-bold mb-4 text-center text-black">Welcome to TwendeTech <br/> where Newbies in tech Get clarity</h2>

        <div className="mb-6">
        
          <button
            onClick={() => setShowLogin(true)}
            className={`px-4 py-2 rounded-l-sm ${
              showLogin
                ? "bg-blue-600 text-white"
                : "bg-white text-black border"
            }`}
          >
            Log In
          </button>
          <button
            onClick={() => setShowLogin(false)}
            className={`px-4 py-2 rounded-r-sm ${
              !showLogin
                ? "bg-blue-600 text-white"
                : "bg-white text-black border"
            }`}
          >
            Sign Up
          </button>
        </div>

        <div className="w-full max-w-md">
          {showLogin ? <LoginForm /> : <SignupForm />}
        </div>
      </div>

      <div className="p-6">
      <div className=" h-full hidden md:block bg-cover  rounded-[40px]  bg-[url('/src/assets/login-img.png')]"></div>
      </div>
    </div>
  );
};

export default AuthPage;
