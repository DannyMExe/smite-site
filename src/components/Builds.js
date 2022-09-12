import React, { useState } from 'react';
import { useSelector, useDispatch, useEffect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

// const {data: gods} = await getGods();


const Builds = () => {
	const dispatch = useDispatch();

	const builds = useSelector((data) => data.builds);
	console.log(builds);

	return (
		<div className='buildsContainer'>
			{builds.length ? (
				builds.map((build) => (
					build.items.length ?
					<div className={'build'} key={build.build_id}>
						<div className={'god-name'}>{build.god.god_name}</div>
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
					</div> : <div>Loading...</div>
				))
			) : (
				<div>Loading...</div>
			)}
		</div>
	);
};

export default Builds;
