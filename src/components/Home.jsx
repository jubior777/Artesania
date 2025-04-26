import React from "react";
import {API_URL} from "./pages/MainHeader"; // Asegúrate de que la ruta sea correcta
import MainHeader from "./pages/MainHeader"; // Asegúrate de que la ruta sea correcta
import Products from "./Products"; // Asegúrate de que la ruta sea correcta

const HomePage = () => {
  return (
    <>
      <MainHeader /> 
      <div>
        <ul>
          <li>Inicio</li>
          <li>Producto</li>
          <li>Contactos</li>
        </ul>
        <Products /> {/* Aquí se utiliza el componente Products */}
      </div>
    </>
  );
};

export default HomePage;
