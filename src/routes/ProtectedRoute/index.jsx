import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children }) => {
    const { user = null } = useSelector(state => state?.auth);
 
    return (
        <> {user === null ? <Navigate to="/login" /> : children} </>
    )
}
