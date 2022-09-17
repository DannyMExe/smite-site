import React, { useState } from 'react';
import { useSelector, useDispatch, useEffect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import AddBuildForm from './addBuildForm';
import UpdateBuildForm from './updateBuildForm';
import { Form } from 'react-bootstrap';

// const {data: gods} = await getGods();

const Build = () => {
	const dispatch = useDispatch();

    const [hidden, setHidden] = useState(true);
    const [showItemDetails, setShowItemDetails] = useState('');

	const params = useParams();
	const builds = useSelector((data) => data.builds);
    // builds = JSON.parse(builds);
	let build;
	if (builds.length) {
		build = builds.find((build) => build.build_id == params.id);
	}
	typeof build?.god.skins[0] === 'string'
		? (build.god.skins = build.god.skins.map((skin) => JSON.parse(skin)))
		: console.log('loading');

    typeof build?.items[0].menuitems[0] === 'string' ? build.items.map((item) => item.menuitems = item.menuitems.map(mitem => JSON.parse(mitem)))
		: console.log('loading');

    // build?.items ? console.log('HERE', JSON.parse(build.items[0].menuitems[0])) : console.log('');
    console.log(build?.items[0].menuitems[0])

        const mouseover = (event) => {
			event.stopPropagation();
            console.log(event.target.id.slice(-1));
            setHidden(false)
            setShowItemDetails(event.target.id.slice(-1));
            console.log(showItemDetails)
        }
        const mouseout = (event) => {
            setHidden(true)
        }

		const skinNum = Math.floor(Math.random(build?.god.skins.length * 100))
		console.log(build?.god.skins.length)
		


	return (
		<>
			<Form>
				<Link to={'/builds'} className="btn btn-primary" style={{margin: 15 + 'px'}}>Builds Page</Link>
			</Form>
			<UpdateBuildForm />
			{/* TODO MATH.RANDOM NOT WORKING */}
			{build?.god.skins.length ? <div
				id='test'
				className='buildContainer'
				style={{
					backgroundImage:
						'url(' + build?.god.skins[Math.floor(Math.random(build?.god.skins.length * 100))]?.godSkin_URL + ')',
				}}
			>
				{/* <h2>{build?.name}</h2>
				<div className='build'>
					{build?.items.map((item) => (
						<div className={'item-box'}>
							<h3>{item.item_name}</h3>
							<img src={item.item_icon} />
						</div>
					))}
				</div> */}
			</div> : <div>Loading...</div>}
			<h2 className='build-name'>{build?.name}</h2>
			<div className='build'>
				{build?.items.map((item, idx) => (
					<div className={'item-box'} onMouseOver={mouseover} onMouseOut={mouseout}>
						<img id={`item${idx}`} src={item.item_icon} />
					</div>
				))}
			</div>

			<div className='item-details'>
				<h3></h3>
			</div>
            {build?.items.map((item, index) => <div className={`${(!hidden && showItemDetails == index) ? 'my-show' : 'hide'}`}>
                    <h2>{item.item_name}</h2>
                    <h3>{item.item_short_desc}</h3>
                    {item.menuitems.map(mitem => <h2><span>{mitem.Value}</span> {mitem.Description}</h2>)}
                    <h4 className='item-desc'>{item.item_desc}</h4>
            </div>)}
		</>
	);
};

export default Build;
