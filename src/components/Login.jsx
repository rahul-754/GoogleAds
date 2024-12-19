import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Hardcoded credentials for demonstration
    const validEmail = "rahul@gmail.com";
    const validPassword = "password123";

    // Validate credentials
    if (email === validEmail && password === validPassword) {
      localStorage.setItem("isLoggedIn", "True");
      setIsLoggedIn(true);
      navigate("/dashboard");
    } else {
      setIsLoading(false);
      toast.error("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-pink-50">
      {!isLoading ? (
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-green-500 rounded-full focus:outline-none focus:ring-2 focus:ring-green-300"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
        <div className="flex items-center justify-center">
          <div className="loader w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default Login;
