
import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "../pages/auth/Login";
import Home from "../pages/home";
import LoginLayout from "../pages/auth/LoginLayOut";
import { ProtectedRoute } from "./ProtectedRoute";
import { Suspense } from "react";
import Loader from "../components/loader";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/home" />,
    },
    {
        path: "/login",
        element: <Suspense fallback={<Loader />}> <LoginLayout><Login /></LoginLayout></Suspense>,
    },
    {
        path: "/home",
        element: <Suspense fallback={<Loader />}> <ProtectedRoute> <Home /></ProtectedRoute></Suspense>,
    }
]);