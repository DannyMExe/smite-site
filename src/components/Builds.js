import React, { useState } from 'react';
import { useSelector, useDispatch, useEffect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AddBuildForm from './addBuildForm';

// const {data: gods} = await getGods();


const Builds = () => {
	const dispatch = useDispatch();

	const builds = useSelector((data) => data.builds);

	return (
		<div className='buildsContainer'>
			<AddBuildForm />
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
							<img src={build.items[0]?.item_icon} />
						</div>
						<div className={'item-box'}>
							{/* <h3>{build.items[1].item_name}</h3> */}
							<img src={build.items[1]?.item_icon} />
						</div>
						<div className={'item-box'}>
							{/* <h3>{build.items[2].item_name}</h3> */}
							<img src={build.items[2]?.item_icon} />
						</div>
						<div className={'item-box'}>
							{/* <h3>{build.items[3].item_name}</h3> */}
							<img src={build.items[3]?.item_icon} />
						</div>
						<div className={'item-box'}>
							{/* <h3>{build.items[4].item_name}</h3> */}
							<img src={build.items[4]?.item_icon} />
						</div>
						<div className={'item-box'}>
							{/* <h3>{build.items[5].item_name}</h3> */}
							<img src={build.items[5]?.item_icon} />
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
