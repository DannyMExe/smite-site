import axios from 'axios';

const GET_ITEMS = 'GET_ITEMS';



const _getItems = (items) => ({
    type: GET_ITEMS,
    items
})


export const getItems = () => async (dispatch) => {
    try {
    const {data:items} = await axios.get('/api/items')
    dispatch(_getItems(items))
    }
    catch (error) {
        console.error(error);
    }
}


const initState = []
const itemsReducer = (state=initState, action) => {

    switch(action.type){
        case GET_ITEMS:
            return action.items
        default:
            return state 
    }
}

export default itemsReducer;