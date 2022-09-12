import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import axios from 'axios';

const getGods = async() => {
    try {
        return await axios.get('/api/gods')
    }
    catch (e) {
        console.error(e);
    }
};

const {data: gods} = await getGods();
console.log(gods);



const Gods = () => {

    const dispatch = useDispatch();


    
    return (
        <div className="godsContainer">
            {gods ? gods.map(god =>
            <div className='god' key={god.id}>
            <div>{god.god_name}</div>
            <img src={god.god_icon_image} height={'75px'} width={'75px'}/>
            </div>
        ): <div>Loading...</div>}
        </div>
    )
}

export default Gods;