import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import GoogleAds from "./components/GoogleAds";
import PPC_report from "./components/PPC_report";
import GoogleAnalytics from "./components/GoogleAnalytics";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const isLoggedIn1 = localStorage.getItem("isLoggedIn") === "true"; // Parse string to boolean
    setIsLoggedIn(isLoggedIn1);
  }, []); // Empty dependency array ensures this runs once on component mount

  return (
    <Router>
      <div>
        <Routes>
          {/* Login Route - if already logged in, redirect to Dashboard */}
          <Route
            path="/login"
            element={isLoggedIn ? <Navigate to="/dashboard" /> : <Login />}
          />
          {/* Conditional rendering for the dashboard */}
          <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />}>
            <Route index element={<GoogleAds />} />
            <Route path="ppc-report" element={<PPC_report />} />
            <Route path="analytics-report" element={<GoogleAnalytics />} />
          </Route>
          {/* Default Route */}
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
