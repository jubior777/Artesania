import React from "react";
import {API_URL} from "../../constants/env"; // Ajusta la ruta de env.js
import MainHeader from "./components/pages/MainHeader"; // Ajusta la ruta de MainHeader.jsx

function App() {
  return (
    <>
      <MainHeader/>
      <div>
        <h1>Hola  {API_URL}</h1>
        <p>Este es el sitio de desarrollo</p>
      </div>
    </>
  );
}

export default App;

