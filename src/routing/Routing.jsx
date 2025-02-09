// src/routing/Routing.jsx
import React from "react";
import { BrowserRouter as Router , Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../pages/Login";
import SignUpPage from "../pages/Signup";
import Mydashboard from "../pages/Mydashboard";
import HomePage from "../pages/Home";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Routing = () => {
  return (
    <Router>
    <Navbar />
    <div className="min-h-screen">
    <Routes>
    <Route path="/" element={<HomePage/>} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/dashboard" element={<Mydashboard/>} />
      <Route
        path="*"
        element={<div className="text-center p-10 text-2xl">404 - Page Not Found</div>}
      />
    </Routes>
    </div>
    <Footer/>
    </Router>
  );
};

export default Routing;
