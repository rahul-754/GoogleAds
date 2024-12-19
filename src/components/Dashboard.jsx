import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Dashboard = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="flex h-scroll">
      {/* Sidebar Component */}
      <Sidebar
        toggleSidebar={toggleSidebar}
        isSidebarVisible={isSidebarVisible}
      />
      
      {/* Content Area */}
      <div className={`flex-1 bg-gray-100 p-4 transition-all duration-300 ${isSidebarVisible ? "ml-1" : ""}`}>
        {/* Show toggle button only when sidebar is hidden */}
        {!isSidebarVisible && (
          <button
            onClick={toggleSidebar}
            className="mb-4 p-2 bg-gray-700 text-white rounded hover:bg-gray-600"
          >
            <FaBars className="h-6 w-6" />
          </button>
        )}
        {/* Render content */}
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
