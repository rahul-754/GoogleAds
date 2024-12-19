import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing React Icons

const Sidebar = ({ toggleSidebar, isSidebarVisible }) => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const handleLogout = () => {
    // Handle logout logic here (e.g., clear user data)
    localStorage.setItem("isLoggedIn", "False");
    console.log("Logout clicked");
    navigate("/login"); // Redirect to login page
  };

  return (
    <div
      className={`w-64 bg-gray-800 text-white h-scroll p-4 transition-all duration-300 ${
        isSidebarVisible ? "block" : "hidden"
      }`}
    >
      <div className="fixed mt-8 ">
        <div className="flex flex-col rounded-lg">
          <Link
            to="/dashboard"
            className={`mb-4 py-2 px-4 rounded text-center ${
              activeLink === "/dashboard" ? "bg-green-500" : "bg-gray-700 hover:bg-gray-600"
            }`}
            onClick={() => handleLinkClick("/dashboard")}
          >
            Google Ads
          </Link>
          <Link
            to="/dashboard/ppc-report"
            className={`mb-4 py-2 px-4 rounded text-center ${
              activeLink === "/dashboard/ppc-report" ? "bg-green-500" : "bg-gray-700 hover:bg-gray-600"
            }`}
            onClick={() => handleLinkClick("/dashboard/ppc-report")}
          >
            PPC Report
          </Link>
          <Link
            to="/dashboard/analytics-report"
            className={`py-2 px-4 rounded text-center ${
              activeLink === "/dashboard/analytics-report" ? "bg-green-500" : "bg-gray-700 hover:bg-gray-600"
            }`}
            onClick={() => handleLinkClick("/dashboard/analytics-report")}
          >
            Google Analytics Report
          </Link>
        </div>
        
        <div className="mt-[55vh]">
          <button
            className="mt-8 w-full py-2 bg-red-600 hover:bg-red-500 rounded text-white"
            onClick={handleLogout} // Call handleLogout on click
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;