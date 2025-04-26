import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products"; // Ajusta la ruta de Products.jsx
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <Router>
      <MainHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App;

