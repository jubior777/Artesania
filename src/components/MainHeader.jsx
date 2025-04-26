import React from "react";
import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="productos">Productos</Link>
    </nav>
  );
};

export default MainHeader;

