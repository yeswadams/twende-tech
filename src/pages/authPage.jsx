import { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const AuthPage = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="mb-6">
        <button
          onClick={() => setShowLogin(true)}
          className={`px-4 py-2 rounded-l-full ${showLogin ? 'bg-blue-600 text-white' : 'bg-white text-black border'}`}
        >
          Log In
        </button>
        <button
          onClick={() => setShowLogin(false)}
          className={`px-4 py-2 rounded-r-full ${!showLogin ? 'bg-blue-600 text-white' : 'bg-white text-black border'}`}
        >
          Sign Up
        </button>
      </div>

      <div className="w-full max-w-md">
        {showLogin ? <LoginForm /> : <SignupForm />}
      </div>
    </div>
  );
};

export default AuthPage;
