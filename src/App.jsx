import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Products from "../src/Products";
import MainHeader from "./components/MainHeader";
import './App.css';


function App() {
  return (
    <Router>
      <MainHeader /> 
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Products />} />
    </Router> 
  );
}

export default App;

