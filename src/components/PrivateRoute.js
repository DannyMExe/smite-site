import { async } from '@firebase/util';
import React, { useEffect, useState } from 'react';
import { Navigate, Outlet, Route } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Login from './Login';

const PrivateRoute = () => {
	const { currentUser, sign, attemptToLogin } = useAuth();
	const [loading, setLoading] = useState(true)
	const [user, setUser] = useState();
	const token = window.localStorage.getItem('token')
	
	useEffect(() => {
		const fetchUser = async() => {
			if(token) {
		setUser(await attemptToLogin(token))
			}
		}

		loading && fetchUser();
		(user || !token) && setLoading(false);

	}, [user])


	console.log(loading, user)

	return (user && user!=='Not signed in') ? <Outlet /> : !loading ? <Navigate to="/login" /> : <div>Loading...</div>;
};

export default PrivateRoute;
