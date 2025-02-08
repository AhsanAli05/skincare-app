// src/routing/Routing.jsx
import React from "react";
import { BrowserRouter as Router , Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../pages/Login";
import SignUpPage from "../pages/Signup";
import Mydashboard from "../pages/Mydashboard";

const Routing = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/dashboard" element={<Mydashboard/>} />
      <Route
        path="*"
        element={<div className="text-center p-10 text-2xl">404 - Page Not Found</div>}
      />
    </Routes>
    </Router>
  );
};

export default Routing;
