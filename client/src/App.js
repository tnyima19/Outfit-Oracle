import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

import AboutUsPage from "./pages/AboutUsPage";
import Navbar from './Navbar/Navbar';
import Home from './pages/Home.js';
import LoginPage from './pages/LoginPage';
import Cart from './pages/Cart.js';
import QuestionPage from './pages/QuestionPage';
import SignUpPage from "./pages/SignUpPage.js";
import ProductPage from './pages/ProductPage.js';
import { ShopContextProvider } from "./context/ShopContext.js";
import "./App.css";



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container-xl text-center">
        <div className="row justify-content-center">
        <ShopContextProvider>
          <Routes>
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} /> 
            <Route path="/question-page" element={<QuestionPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/" element={<Home />} />
          </Routes>
          </ShopContextProvider>
        </div>
      </div>
    
    </BrowserRouter>
  );
}

export default App;
