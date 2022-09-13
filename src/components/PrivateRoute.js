import React from 'react';
import { Navigate, Outlet, Route } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Login from './Login';

const PrivateRoute = () => {
	const { currentUser } = useAuth();

	return currentUser ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
