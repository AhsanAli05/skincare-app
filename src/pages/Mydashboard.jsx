import React from "react";

const Mydashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to the Dashboard</h1>
      <p className="text-lg text-gray-700">This is your main dashboard where you can view your progress and reports.</p>
      <div className="mt-8">
        <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          View Reports
        </button>
      </div>
    </div>
  );
};

export default Mydashboard;
