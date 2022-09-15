import axios from 'axios';

const GET_USERS = 'GET_USERS';



const _getUSERS = (users) => ({
    type: GET_USERS,
    users
})


export const getUsers = () => async (dispatch) => {
    try {
    const {data:users} = await axios.get('/api/gods')
    dispatch(_getUsers(gods))
    }
    catch (error) {
        console.error(error);
    }
}


const initState = []
const usersReducer = (state=initState, action) => {

    switch(action.type){
        case GET_USERS:
            return action.users
        default:
            return state 
    }
}

export default usersReducer;