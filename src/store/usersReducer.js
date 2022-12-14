import axios from 'axios';

const GET_USERS = 'GET_USERS';



const _getUsers = (users) => ({
    type: GET_USERS,
    users
})


export const getUsers = () => async (dispatch) => {
    try {
    const {data:users} = await axios.get('/api/users')
    dispatch(_getUsers(users))
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