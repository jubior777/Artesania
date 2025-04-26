import React from "react";
import Products from "./Products"; // Asegúrate de que la ruta sea correcta

const HomePage = () => {
  return (
    <>
      <MainHeader /> 
      <div>
        
        <Products /> {/* Aquí se utiliza el componente Products */}
      </div>
    </>
  );
};

export default HomePage;
