import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';


const Gods = () => {

    const dispatch = useDispatch();
    const gods = useSelector(state => state.gods)



    
    return (
        <div className="godsContainer">
            {gods ? gods.map(god =>
            <div className='god' key={god.id}>
            <div>{god.god_name}</div>
            <div className='item-box'>
            <img src={god.god_icon_image}/>
            </div>
            </div>
        ): <div>Loading...</div>}
        </div>
    )
}

export default Gods;