import React from "react";
import {API_URL} from "./components/constants/env" // Ajusta la ruta de env.js


function App() {
  return (
    <>
      <div>
        <h1>Hola  {API_URL}</h1>
        <p>Este es el sitio de desarrollo</p>
      </div>
    </>
  );
}

export default App;

