import axios from 'axios';

const GET_GODS = 'GET_GODS';



const _getGods = (gods) => ({
    type: GET_GODS,
    gods
})


export const getGods = () => async (dispatch) => {
    try {
    const {data:gods} = await axios.get('/api/gods')
    dispatch(_getGods(gods))
    }
    catch (error) {
        console.error(error);
    }
}


const initState = []
const godsReducer = (state=initState, action) => {

    switch(action.type){
        case GET_GODS:
            return action.gods
        default:
            return state 
    }
}

export default godsReducer;