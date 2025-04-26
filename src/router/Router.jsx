import React from "react"; // Importa React para usar JSX
import { createBrowserRouter } from "react-router-dom";
import App from "../App"; // Importa el componente principal de la aplicación
import Error404 from "../components/Error404";
import Products from "../components/Products";



const appRouter = createBrowserRouter([
    { 
        path: "/", 
        element: <App />,
        errorElement: <Error404 />,
    },
    { 
        path: "/productos",
        element: <Products />,
    }
]);

export default appRouter;
