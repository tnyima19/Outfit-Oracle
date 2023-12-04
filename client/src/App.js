import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

import AboutUsPage from "./pages/AboutUsPage";
import Navbar from './Navbar/Navbar';
import Home from './pages/Home.js';
import LoginPage from './pages/LoginPage';
import QuestionPage from './pages/QuestionPage';
import SignUpPage from "./pages/SignUpPage.js";
import "./App.css";



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container-xl text-center">
        <div className="row justify-content-center">
          <Routes>
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} /> 
            <Route path="/question-page" element={<QuestionPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
