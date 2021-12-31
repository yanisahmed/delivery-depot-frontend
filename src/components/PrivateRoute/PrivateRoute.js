import React from 'react';
import useAuth from '../../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, isLoading } = useAuth();
    const location = useLocation();

    if (isLoading) {
        return "loading";
    }
    return user.email ? children : <Navigate
        to="/login"
        replace
        state={{ path: location.pathname }}
    />;
};

export default PrivateRoute;