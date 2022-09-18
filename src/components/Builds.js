import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AddBuildForm from './addBuildForm';
import { Form } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';



const Builds = () => {

	const { attemptToLogin } = useAuth();
	const [loading, setLoading] = useState(true)
	const [user, setUser] = useState();
	const token = window.localStorage.getItem('token')


	const dispatch = useDispatch();

	const builds = useSelector((data) => data.builds);

	console.log((token == true), token)

	useEffect(() => {
		const fetchUser = async() => {
			if (token) {
				console.log('in fetch')
		setUser(await attemptToLogin(token))
			}
		}

		loading && fetchUser();
		(user || !token) && setLoading(false);

	}, [user])

	return (
		<div className='buildsContainer'>
			<Form>
			<Link to={'/builds/add'} className="btn btn-primary" style={{margin: 15 + 'px'}}>Add Your Own Build</Link>
			{(!user || user === 'Not signed in') && <Link to={'/login'} className="btn btn-primary" style={{margin: 15 + 'px'}}>Log In</Link>}
			</Form>
			{builds.length ? (
				builds.map((build) => (
					build.items ? build.items.length ?
					<Link to={`/builds/${build.build_id}`} key={build.build_id}><div className={'builds'} >
						<div className={'god-name'}>{build.name}</div>
						<img
							className={'god-box'}
							src={build.god.god_icon_image}
						/>
						<div className={'item-box'}>
							{/* <h3>{build.items[0].item_name}</h3> */}
							<img src={build.items[0].item_icon} />
						</div>
						<div className={'item-box'}>
							{/* <h3>{build.items[1].item_name}</h3> */}
							<img src={build.items[1].item_icon} />
						</div>
						<div className={'item-box'}>
							{/* <h3>{build.items[2].item_name}</h3> */}
							<img src={build.items[2].item_icon} />
						</div>
						<div className={'item-box'}>
							{/* <h3>{build.items[3].item_name}</h3> */}
							<img src={build.items[3].item_icon} />
						</div>
						<div className={'item-box'}>
							{/* <h3>{build.items[4].item_name}</h3> */}
							<img src={build.items[4].item_icon} />
						</div>
						<div className={'item-box'}>
							{/* <h3>{build.items[5].item_name}</h3> */}
							<img src={build.items[5].item_icon} />
						</div>
						</div></Link> : <div>Loading Items</div> : <div>Loading Items</div>
				))
			) : (
				<div>Loading...</div>
			)}
		</div>
	);
};

export default Builds;
