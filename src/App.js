import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Home from './components/Home';
import Items from './components/Items';
import Gods from './components/Gods';
import Builds from './components/Builds';
import { getBuilds } from './store/buildsReducer';
import { getGods } from './store/godsReducer';
import { getItems } from './store/itemsReducer';
import Build from './components/Build';
import AddBuild from './components/addBuild';
import SignUpPage from './components/SignUpPage';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import ForgotPassword from './components/ForgotPassword';
import UpdateProfile from './components/UpdateProfile';


function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getBuilds());
		dispatch(getGods());
		dispatch(getItems());
	
	}, []);

	return (
		
				<Routes>
				
					<Route path='/' element={<Login />} />
					<Route path='/signup' element={<SignUpPage />} />
					<Route path='/login' element={<Login />} />
					<Route path='/forgot-password' element={<ForgotPassword />} />

					<Route element={<PrivateRoute />}>
						<Route path='/dashboard' element={<Dashboard />} />
						<Route path='/update-profile' element={<UpdateProfile />} />
					</Route>
					<Route path='/items' element={<Items />} />
					<Route path='/gods' element={<Gods />} />
					<Route path='/builds' element={<Builds />} />
					<Route path='/builds/:id' element={<Build />} />
					<Route path='/builds/add' element={<AddBuild />} />
				
					
				</Routes>
	);
}

export default App;
