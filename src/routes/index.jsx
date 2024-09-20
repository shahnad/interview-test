
import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "../pages/auth/Login";
import Home from "../pages/home";
import LoginLayout from "../pages/auth/LoginLayOut";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/home" />,
    },
    {
        path: "/login",
        element: <LoginLayout><Login /></LoginLayout>,
    },
    {
        path: "/home",
        element: <Home />,
    }
]);