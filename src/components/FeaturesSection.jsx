// src/components/FeaturesSection.jsx
import React from "react";
import { Camera, BarChart, Bell, Heart } from "lucide-react"; // Using lucide-react for icons

const features = [
  {
    icon: <Camera className="w-12 h-12 text-blue-600" />,
    title: "AI-Driven Skin Analysis",
    description:
      "Upload photos and get real-time AI insights on acne detection, redness, and hydration levels.",
  },
  {
    icon: <BarChart className="w-12 h-12 text-blue-600" />,
    title: "Progress Tracking",
    description:
      "Track your skin's progress over time with photos and personalized insights.",
  },
  {
    icon: <Bell className="w-12 h-12 text-blue-600" />,
    title: "Daily Reminders",
    description:
      "Stay on top of your skincare routine with customizable daily reminders.",
  },
  {
    icon: <Heart className="w-12 h-12 text-blue-600" />,
    title: "Personalized Recommendations",
    description:
      "Receive skincare tips and product suggestions tailored to your skin type and goals.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-8 hover:shadow-2xl transition duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
