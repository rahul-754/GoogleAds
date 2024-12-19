import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    if (email === "admin@gmail.com" && password === "admin") {
      toast.success("Login Successful!");
      setIsLoading(true);
      localStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn(true);

      // Simulate a delay for loader and then navigate
      setTimeout(() => {
        setIsLoading(false);
        navigate("/dashboard");
      }, 2000); // 2-second delay
    } else {
      toast.error("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-pink-50">
      {!isLoggedIn ? (
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h1 className="text-3xl font-bold text-center text-green-600 mb-2">
            <span className="text-green-500">&lt;</span>Login
            <span className="text-green-500">&gt;</span>
          </h1>
          <p className="text-green-900 text-center mb-6">Welcome Back!</p>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-green-500 rounded-full focus:outline-none focus:ring-2 focus:ring-green-300"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-green-500 rounded-full focus:outline-none focus:ring-2 focus:ring-green-300"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-full hover:bg-green-500 transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      ) : (
        isLoading && (
          <div className="flex items-center justify-center">
            <div className="loader w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )
      )}
      <ToastContainer />
    </div>
  );
};

export default Login;
