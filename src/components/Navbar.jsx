import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-blue-600">
              Skin Health Tracker
            </Link>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            {/* Navigation Links */}
            <Link to="/" className="text-gray-700 hover:text-blue-500">
              Home
            </Link>
            <Link to="/dashboard" className="text-gray-700 hover:text-blue-500">
              Dashboard
            </Link>
            <Link to="/login" className="text-gray-700 hover:text-blue-500">
              Login
            </Link>
          </div>
          <div className="flex items-center md:hidden">
            {/* Mobile Menu Button */}
            <button className="text-gray-700 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
