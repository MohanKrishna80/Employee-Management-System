import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(user.email, user.password);

    setUser({
      email: "",
      password: "",
    });
  };

  return (
   <div className="flex justify-center items-center min-h-screen w-full bg-[#020617] px-4">

  <div className="relative w-full max-w-md">

 
    <div className="absolute inset-0 bg-blue-600 opacity-20 blur-3xl rounded-3xl"></div>

   
    <div className="relative bg-[#0f172a] border border-blue-500/30 
    p-6 sm:p-10 md:p-12 
    rounded-3xl shadow-2xl 
    w-full">

      <h1 className="text-2xl sm:text-3xl font-bold text-center text-white mb-2">
        Employer Management
      </h1>

      <p className="text-gray-400 text-center mb-6 sm:mb-8">
        Sign in to your account
      </p>

      <form
        className="flex flex-col gap-4 sm:gap-5"
        onSubmit={handleSubmit}
      >

        <input
          className="w-full px-4 py-3 rounded-lg bg-transparent text-white 
          placeholder-gray-500 border border-gray-600 
          focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
          type="email"
          placeholder="Email address"
          required
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />

        <input
          className="w-full px-4 py-3 rounded-lg bg-transparent text-white 
          placeholder-gray-500 border border-gray-600 
          focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
          type="password"
          placeholder="Password"
          required
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white 
          font-semibold py-3 rounded-lg transition duration-300 
          shadow-lg hover:shadow-blue-500/40"
        >
          Login
        </button>

      </form>

    </div>
  </div>
</div>


  );
};

export default Login;
