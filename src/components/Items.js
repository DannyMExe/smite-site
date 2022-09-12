import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import axios from 'axios';

const getItems = async() => {
    try {
        return await axios.get('/api/items')
    }
    catch (e) {
        console.error(e);
    }
};

const {data: items} = await getItems();
console.log(items);



const Items = () => {

    const dispatch = useDispatch();


    
    return (
        <div className="itemsContainer">
            {items ? items.map(item =>
            <div className='item' key={item.id}>
            <div>{item.item_name}</div>
            <img src={item.item_icon} height={'75px'} width={'75px'}/>
            </div>
        ): <div>Loading...</div>}
        </div>
    )
}

export default Items;