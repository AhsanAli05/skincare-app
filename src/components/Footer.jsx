import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo & Description */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold text-white">Skin Health Tracker</h2>
            <p className="text-sm text-gray-400">
              Analyze your skin and track progress with AI-driven insights.
            </p>
          </div>
          
          

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.59-2.46.69a4.23 4.23 0 0 0 1.85-2.33c-.84.5-1.76.86-2.75 1.06a4.19 4.19 0 0 0-7.13 3.83A11.87 11.87 0 0 1 3.16 4.57a4.19 4.19 0 0 0 1.3 5.6 4.17 4.17 0 0 1-1.9-.53v.05a4.2 4.2 0 0 0 3.36 4.11 4.18 4.18 0 0 1-1.9.07 4.21 4.21 0 0 0 3.92 2.91A8.4 8.4 0 0 1 2 18.54a11.85 11.85 0 0 0 6.29 1.85c7.55 0 11.67-6.25 11.67-11.67 0-.18 0-.36-.01-.54A8.36 8.36 0 0 0 22.46 6z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.75 3H4.25C3.01 3 2 4.01 2 5.25v13.5C2 19.99 3.01 21 4.25 21h15.5c1.24 0 2.25-1.01 2.25-2.25V5.25C22 4.01 20.99 3 19.75 3zM20 18.75c0 .41-.34.75-.75.75H4.75a.75.75 0 0 1-.75-.75V5.75c0-.41.34-.75.75-.75h14.5c.41 0 .75.34.75.75v13z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="mt-4 text-center text-sm text-gray-400">
          © 2025 Skin Health Tracker. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer
