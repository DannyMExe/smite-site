import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createBuild } from '../store/buildsReducer';
import numberToWords from 'number-to-words';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext";


const AddBuild = () => {

    const [name, setName] = useState('');
    const [god_id, setGod] = useState(3492);
    const [godImg, setGodImg] = useState('')
    const [relic1_id, setRelic1] = useState(21545);
    const [relic1Img, setRelic1Img] = useState('')
    const [relic2_id, setRelic2] = useState(21545);
    const [relic2Img, setRelic2Img] = useState('')
    const [finalItem1, setFinalItem1] = useState(21504);
    const [finalItem1Img, setFinalItem1Img] = useState('');
    const [finalItem2, setFinalItem2] = useState(21504);
    const [finalItem2Img, setFinalItem2Img] = useState('');
    const [finalItem3, setFinalItem3] = useState(21504);
    const [finalItem3Img, setFinalItem3Img] = useState('');
    const [finalItem4, setFinalItem4] = useState(21504);
    const [finalItem4Img, setFinalItem4Img] = useState('');
    const [finalItem5, setFinalItem5] = useState(21504);
    const [finalItem5Img, setFinalItem5Img] = useState('');
    const [finalItem6, setFinalItem6] = useState(21504);
    const [finalItem6Img, setFinalItem6Img] = useState('');
    const [desc, setDesc] = useState('');

    let final_items = [finalItem1, finalItem2, finalItem3, finalItem4, finalItem5, finalItem6]

	const dispatch = useDispatch();
    const navigate = useNavigate();

    const gods = useSelector(state => state.gods)
    const allItems = useSelector(state => state.items)
    const user = JSON.parse(window.localStorage.getItem("user"))

    const user_id = user?.id

    // const { sign } = useAuth();
    // console.log(sign);
    


    const relics = allItems.filter(item => item.type === 'Active')
    const finalItems = allItems.filter(item => item.type === 'Item' && (item.item_tier === 3 || item.item_tier === 4));



	const handleChange = (prop) => (event) => {
		if (prop === 'name') {
			setName(event.target.value);
		} else if (prop === 'god') {
			setGod(+event.target.getAttribute('value'));
            const container = document.querySelector('#godsContainer');
            container.classList.toggle('hide')
            setGodImg(event.target.getAttribute('godImg'));
		} else if (prop === 'relic1') {
            setRelic1(+event.target.getAttribute('value'));
            const container = document.querySelector('#relic1Container');
            container.classList.toggle('hide')
            setRelic1Img(event.target.getAttribute('relicimg'));
        } else if (prop === 'relic2') {
            setRelic2(+event.target.getAttribute('value'));
            const container = document.querySelector('#relic2Container');
            container.classList.toggle('hide')
            setRelic2Img(event.target.getAttribute('relicimg'));
        } else if (prop === 'finalItem1') {
            setFinalItem1(+event.target.getAttribute('value'));
            const container = document.querySelector('#finalItem1');
            container.classList.toggle('hide')
            setFinalItem1Img(event.target.getAttribute('itemimg'));
        } else if (prop === 'finalItem2') {
            setFinalItem2(+event.target.getAttribute('value'));
            const container = document.querySelector('#finalItem2');
            container.classList.toggle('hide')
            setFinalItem2Img(event.target.getAttribute('itemimg'));
        } else if (prop === 'finalItem3') {
            setFinalItem3(+event.target.getAttribute('value'));
            const container = document.querySelector('#finalItem3');
            container.classList.toggle('hide')
            setFinalItem3Img(event.target.getAttribute('itemimg'));
        } else if (prop === 'finalItem4') {
            setFinalItem4(+event.target.getAttribute('value'));
            const container = document.querySelector('#finalItem4');
            container.classList.toggle('hide')
            setFinalItem4Img(event.target.getAttribute('itemimg'));
        } else if (prop === 'finalItem5') {
            setFinalItem5(+event.target.getAttribute('value'));
            const container = document.querySelector('#finalItem5');
            container.classList.toggle('hide')
            setFinalItem5Img(event.target.getAttribute('itemimg'));
        } else if (prop === 'finalItem6') {
            setFinalItem6(+event.target.getAttribute('value'));
            const container = document.querySelector('#finalItem6');
            container.classList.toggle('hide')
            setFinalItem6Img(event.target.getAttribute('itemimg'));
        } else if (prop === 'desc') {
            setDesc(event.target.value);
        }
		console.log(prop, event);
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();
        console.log([name, god_id, relic1_id, relic2_id, final_items, desc])
		dispatch(createBuild({user_id, name, god_id, relic1_id, relic2_id, final_items, desc}));
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
        navigate('/builds')
	};

	return (
        <form id='add-build-form' onSubmit={handleSubmit}>
            <Link to={'/builds'} className="btn btn-primary" style={{margin: 15 + 'px'}}>Back to Builds</Link>
            
        <label htmlFor='name'>Build Name:</label>
        <input
            name='name'
            value={name}
            onChange={handleChange('name')}
        />
        <label htmlFor='god'>Select a God:</label>
        {/* <select value={god_id} onChange={handleChange('god')}>
            {gods.length ? gods.map(god => <option key={god.id} value={god.id}>{god.god_name}</option>) : <option value='loading'>Loading gods...</option>}
        </select> */}
        <div className='god-holder' >
            <div className='item-box' onClick={handleChange('god')}>
                <img src={godImg} />
            </div>
        </div>
        <div id='godsContainer' className="godsContainer-add" >
            {gods ? gods.map(god =>
            <div className='god' key={god.id} onClick={handleChange('god')}>
            <div className='god-name-add' value={god.id} godImg={god.god_icon_image}>{god.god_name}</div>
            <div className='item-box' >
                <img src={god.god_icon_image}/>
            </div>
            </div>
        ): <div>Loading...</div>}
        </div>

        <label htmlFor='relic1'>First Relic:</label>

        <div className='god-holder' >
            <div className='item-box' onClick={handleChange('relic1')}>
                <img src={relic1Img} />
            </div>
        </div>
        <div id='relic1Container' className="godsContainer-add" >
            {relics ? relics.map(relic =>
            <div className='god' key={relic.item_id} onClick={handleChange('relic1')}>
            <div className='god-name-add' value={relic.item_id} relicimg={relic.item_icon}>{relic.item_name}</div>
            <div className='item-box' >
                <img src={relic.item_icon}/>
            </div>
            </div>
        ): <div>Loading...</div>}
        </div>

        {/* <select value={relic1_id} onChange={handleChange('relic1')}>
            {relics.length ? relics.map(relic => <option key={relic.id} value={relic.item_id}>{relic.item_name}</option>): <option value='loading'>Loading relics...</option>}
        </select> */}

        <label htmlFor='relic2'>Second Relic:</label>

        <div className='god-holder' >
            <div className='item-box' onClick={handleChange('relic2')}>
                <img src={relic2Img} />
            </div>
        </div>
        <div id='relic2Container'className="godsContainer-add" >
            {relics ? relics.map(relic =>
            <div className='god' key={relic.item_id} onClick={handleChange('relic2')}>
            <div className='god-name-add' value={relic.item_id} relicimg={relic.item_icon}>{relic.item_name}</div>
            <div className='item-box' >
                <img src={relic.item_icon}/>
            </div>
            </div>
        ): <div>Loading...</div>}
        </div>
        {/* <select value={relic2_id} onChange={handleChange('relic2')}>
            {relics.length ? relics.map(relic => <option key={relic.id} value={relic.item_id}>{relic.item_name}</option>): <option value='loading'>Loading relics...</option>}
        </select> */}

        {final_items.map((item, index) => <><label htmlFor={`finalItem${index+1}`}>{numberToWords.toWordsOrdinal(index+1)} Item:</label>

        <div className='god-holder' >
            <div className='item-box' onClick={handleChange(`finalItem${index+1}`)}>
                <img src={eval(`finalItem${index+1}Img`)} />
            </div>
        </div>
        <div id={`finalItem${index+1}`} className="godsContainer-add" >
            {finalItems.length ? finalItems.map(item =>
            <div className='god' key={item.item_id} onClick={handleChange(`finalItem${index+1}`)}>
            <div className='god-name-add' value={item.item_id} itemimg={item.item_icon}>{item.item_name}</div>
            <div className='item-box' >
                <img src={item.item_icon}/>
            </div>
            </div>
        ): <div>Loading...</div>}
        </div>

        {/* <select value={eval(`finalItem${index+1}`)} onChange={handleChange(`finalItem${index+1}`)}>
            {finalItems.length ? finalItems.map(item => <option key={item.id} value={item.item_id}>{item.item_name}</option>): <option value='loading'>Loading Items...</option>}
        </select> */}
        </>)}

        <label htmlFor='desc'>Description:</label>
        <textarea
            name='desc'
            value={desc}
            onChange={handleChange('desc')}
            rows={5}
            cols={50}
        />

        <button type='submit'>Submit</button>
    </form>
    );
};

export default AddBuild;
