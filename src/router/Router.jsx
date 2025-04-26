import React from "react"; // Importa React para usar JSX
import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Error404 from "../components/Error404";
import Products from "../components/Products";


const appRouter = createBrowserRouter([
    { 
        path: "/", 
        element: <Home />,
        errorElement: <Error404 />,
    },
    { 
        path: "/productos",
        element: <Products />,
    }
]);

export default appRouter;
