const LoginForm = () => {
  return (
    <form className="bg-white text-black p-6 rounded shadow space-y-4">
      <h2 className="text-xl font-bold text-center">Log In</h2>
      <p className="text-sm text-gray-600 text-center">Great seeing you back, login to continue</p>
      <input type="email" placeholder="Email" className="w-full px-3 py-2 border rounded" />
      <input type="password" placeholder="Password" className="w-full px-3 py-2 border rounded" />
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Log In</button>
    </form>
  );
};

export default LoginForm;
