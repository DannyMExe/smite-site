import React from 'react';
import { Navigate, Outlet, Route } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Login from './Login';

const PrivateRoute = () => {
	const { currentUser, sign } = useAuth();

	const user = JSON.parse(window.localStorage.getItem("user"));

	return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
