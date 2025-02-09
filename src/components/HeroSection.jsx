// src/components/HeroSection.jsx
import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">
          Welcome to Skin Health Tracker
        </h1>
        <p className="text-lg mb-8">
          Upload your photos, track your skin health, and get AI-driven insights
          to achieve healthier skin. Discover personalized skincare routines and
          monitor your progress with ease.
        </p>
        <a
          href="#upload"
          className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition duration-300"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
