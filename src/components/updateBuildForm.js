import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { updateBuild } from '../store/buildsReducer';

const UpdateBuildForm = () => {
	const [name, setName] = useState('');
    const [god_id, setGod] = useState(3492);
    const [relic1_id, setRelic1] = useState(21545);
    const [relic2_id, setRelic2] = useState(21545);
    const [finalItem1, setFinalItem1] = useState(21504);
    const [finalItem2, setFinalItem2] = useState(21504);
    const [finalItem3, setFinalItem3] = useState(21504);
    const [finalItem4, setFinalItem4] = useState(21504);
    const [finalItem5, setFinalItem5] = useState(21504);
    const [finalItem6, setFinalItem6] = useState(21504);
    const [desc, setDesc] = useState('');

    let final_items = [finalItem1, finalItem2, finalItem3, finalItem4, finalItem5, finalItem6]

	const dispatch = useDispatch();

    const { id } = useParams();
    const gods = useSelector(state => state.gods)
    const allItems = useSelector(state => state.items)
    const builds = useSelector(state => state.builds)
    const build = builds.find(build => build.build_id == id)
    console.log(build)

    const relics = allItems.filter(item => item.type === 'Active')
    const finalItems = allItems.filter(item => item.type === 'Item' && (item.item_tier === 3 || item.item_tier === 4));

    React.useEffect(() => {
		if (build) {
			setName(build.name);
            setGod(build.god_id);
            setRelic1(build.relic1_id);
            setRelic2(build.relic2_id);
            setFinalItem1(build.final_items[0]);
            setFinalItem2(build.final_items[1]);
            setFinalItem3(build.final_items[2]);
            setFinalItem4(build.final_items[3]);
            setFinalItem5(build.final_items[4]);
            setFinalItem6(build.final_items[5]);
            setDesc(build.desc);


		}
	}, [build]);


	const handleChange = (prop) => (event) => {
		if (prop === 'name') {
			setName(event.target.value);
		} else if (prop === 'god') {
			setGod(+event.target.value);
		} else if (prop === 'relic1') {
            setRelic1(+event.target.value);
        } else if (prop === 'relic2') {
            setRelic2(+event.target.value);
        } else if (prop === 'finalItem1') {
            setFinalItem1(+event.target.value);
        } else if (prop === 'finalItem2') {
            setFinalItem2(+event.target.value);
        } else if (prop === 'finalItem3') {
            setFinalItem3(+event.target.value);
        } else if (prop === 'finalItem4') {
            setFinalItem4(+event.target.value);
        } else if (prop === 'finalItem5') {
            setFinalItem5(+event.target.value);
        } else if (prop === 'finalItem6') {
            setFinalItem6(+event.target.value);
        } else if (prop === 'desc') {
            setDesc(event.target.value);
        }
		console.log(prop, event);
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();
		dispatch(updateBuild({ name, god_id, relic1_id, relic2_id, final_items, desc }, id));
        setName('');
        setGod(3492);
        setRelic1(21545);
        setRelic2(21545);
        setFinalItem1(21504);
        setFinalItem2(21504);
        setFinalItem3(21504);
        setFinalItem4(21504);
        setFinalItem5(21504);
        setFinalItem6(21504);
        setDesc('');
	};

	return (
		<form id='campus-form' onSubmit={handleSubmit}>
            
			<label htmlFor='name'>Name:</label>
			<input
				name='name'
				value={name}
				onChange={handleChange('name')}
			/>
            <label htmlFor='god'>God:</label>
            <select value={god_id} onChange={handleChange('god')}>
                {gods.length ? gods.map(god => <option key={god.id} value={god.id}>{god.god_name}</option>) : <option value='loading'>Loading gods...</option>}
            </select>

            <label htmlFor='relic1'>First Relic:</label>
            <select value={relic1_id} onChange={handleChange('relic1')}>
                {relics.length ? relics.map(relic => <option key={relic.id} value={relic.item_id}>{relic.item_name}</option>): <option value='loading'>Loading relics...</option>}
            </select>

            <label htmlFor='relic2'>Second Relic:</label>
            <select value={relic2_id} onChange={handleChange('relic2')}>
                {relics.length ? relics.map(relic => <option key={relic.id} value={relic.item_id}>{relic.item_name}</option>): <option value='loading'>Loading relics...</option>}
            </select>

            <label htmlFor='finalItem1'>First Item:</label>
            <select value={finalItem1} onChange={handleChange('finalItem1')}>
                {finalItems.length ? finalItems.map(item => <option key={item.id} value={item.item_id}>{item.item_name}</option>): <option value='loading'>Loading Items...</option>}
            </select>

            <label htmlFor='finalItem2'>Second Item:</label>
            <select value={finalItem2} onChange={handleChange('finalItem2')}>
                {finalItems.length ? finalItems.map(item => <option key={item.id} value={item.item_id}>{item.item_name}</option>): <option value='loading'>Loading Items...</option>}
            </select>

            <label htmlFor='finalItem3'>Third Item:</label>
            <select value={finalItem3} onChange={handleChange('finalItem3')}>
                {finalItems.length ? finalItems.map(item => <option key={item.id} value={item.item_id}>{item.item_name}</option>): <option value='loading'>Loading Items...</option>}
            </select>

            <label htmlFor='finalItem4'>Fourth Item:</label>
            <select value={finalItem4} onChange={handleChange('finalItem4')}>
                {finalItems.length ? finalItems.map(item => <option key={item.id} value={item.item_id}>{item.item_name}</option>): <option value='loading'>Loading Items...</option>}
            </select>

            <label htmlFor='finalItem5'>Fifth Item:</label>
            <select value={finalItem5} onChange={handleChange('finalItem5')}>
                {finalItems.length ? finalItems.map(item => <option key={item.id} value={item.item_id}>{item.item_name}</option>): <option value='loading'>Loading Items...</option>}
            </select>

            <label htmlFor='finalItem6'>Sixth Item:</label>
            <select value={finalItem6} onChange={handleChange('finalItem6')}>
                {finalItems.length ? finalItems.map(item => <option key={item.id} value={item.item_id}>{item.item_name}</option>): <option value='loading'>Loading Items...</option>}
            </select>

			<label htmlFor='desc'>Description:</label>
			<input
				name='desc'
				value={desc}
				onChange={handleChange('desc')}
			/>

			<button type='submit'>Submit</button>
		</form>
	);
};

export default UpdateBuildForm;
