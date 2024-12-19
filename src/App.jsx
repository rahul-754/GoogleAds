import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import GoogleAds from "./components/GoogleAds";
import PPC_report from "./components/PPC_report";
import GoogleAnalytics from "./components/GoogleAnalytics";
import Sidebar from "./components/Sidebar"; // Import Sidebar here

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check localStorage for login state on page load
  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn");
    if (loginStatus === "True") {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Router>
      <div className="flex">
        {/* Render Sidebar only if the user is logged in */}
        {isLoggedIn && <Sidebar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
        
        <div className="flex-1">
          <Routes>
            {/* Login Route - if already logged in, redirect to Dashboard */}
            <Route
              path="/login"
              element={isLoggedIn ? <Navigate to="/dashboard" /> : <Login setIsLoggedIn={setIsLoggedIn} />}
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
      </div>
    </Router>
  );
}

export default App;
