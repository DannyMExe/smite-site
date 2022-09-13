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

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getBuilds());
		dispatch(getGods());
		dispatch(getItems());
	
	}, []);

	console.log(process.env)

	return (
		<div>
			<main>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/items' element={<Items />} />
					<Route path='/gods' element={<Gods />} />
					<Route path='/builds' element={<Builds />} />
					<Route path='/builds/:id' element={<Build />} />
					<Route path='/builds/add' element={<AddBuild />} />
					<Route path='/signup' element={<SignUpPage />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
