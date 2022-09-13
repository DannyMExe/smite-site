import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createBuild } from '../store/buildsReducer';
import numberToWords from 'number-to-words';

const AddBuild = () => {

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

    const gods = useSelector(state => state.gods)
    const allItems = useSelector(state => state.items)

    const relics = allItems.filter(item => item.type === 'Active')
    const finalItems = allItems.filter(item => item.type === 'Item' && (item.item_tier === 3 || item.item_tier === 4));

    console.log()


	const handleChange = (prop) => (event) => {
		if (prop === 'name') {
			setName(event.target.value);
		} else if (prop === 'god') {
			setGod(+event.target.getAttribute('value'));
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
		dispatch(createBuild({ name, god_id, relic1_id, relic2_id, final_items, desc }));
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
        <form id='add-build-form' onSubmit={handleSubmit}>
            
        <label htmlFor='name'>Name:</label>
        <input
            name='name'
            value={name}
            onChange={handleChange('name')}
        />
        <label htmlFor='god'>Select a God:</label>
        {/* <select value={god_id} onChange={handleChange('god')}>
            {gods.length ? gods.map(god => <option key={god.id} value={god.id}>{god.god_name}</option>) : <option value='loading'>Loading gods...</option>}
        </select> */}
        <div className="godsContainer-add" onClick={handleChange('god')}>
            {gods ? gods.map(god =>
            <div className='god' key={god.id} >
            <div className='god-name-add' value={god.id}>{god.god_name}</div>
            <div className='item-box'>
                <img src={god.god_icon_image}/>
            </div>
            </div>
        ): <div>Loading...</div>}
        </div>

        <label htmlFor='relic1'>First Relic:</label>
        <select value={relic1_id} onChange={handleChange('relic1')}>
            {relics.length ? relics.map(relic => <option key={relic.id} value={relic.item_id}>{relic.item_name}</option>): <option value='loading'>Loading relics...</option>}
        </select>

        <label htmlFor='relic2'>Second Relic:</label>
        <select value={relic2_id} onChange={handleChange('relic2')}>
            {relics.length ? relics.map(relic => <option key={relic.id} value={relic.item_id}>{relic.item_name}</option>): <option value='loading'>Loading relics...</option>}
        </select>

        {final_items.map((item, index) => <><label htmlFor={`finalItem${index+1}`}>{numberToWords.toWordsOrdinal(index+1)} Item:</label>
        <select value={eval(`finalItem${index+1}`)} onChange={handleChange(`finalItem${index+1}`)}>
            {finalItems.length ? finalItems.map(item => <option key={item.id} value={item.item_id}>{item.item_name}</option>): <option value='loading'>Loading Items...</option>}
        </select></>)}

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

export default AddBuild;
