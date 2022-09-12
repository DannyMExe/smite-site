import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Home from './components/Home';
import Items from './components/Items';
import Gods from './components/Gods';
import Builds from './components/Builds';
import { getBuilds } from './store/buildsReducer';


function App() {
	const dispatch = useDispatch();
	console.log('App')

	useEffect(() => {
		dispatch(getBuilds());
	
	}, []);

	return (
		<div>
			<main>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/items' element={<Items />} />
					<Route path='/gods' element={<Gods />} />
					<Route path='/builds' element={<Builds />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
