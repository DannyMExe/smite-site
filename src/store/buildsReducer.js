import axios from 'axios';

const GET_BUILDS = 'GET_BUILDS';
const CREATE_BUILD = 'CREATE_BUILD';
const DELETE_BUILD = 'DELETE_BUILD';
const UPDATE_BUILD = 'UPDATE_BUILD';


const _getBuilds = (builds) => ({
    type: GET_BUILDS,
    builds
})

const _createBuild = (build) => ({
    type: CREATE_BUILD,
    build
})

const _deleteBuuild = (build) => ({
    type: DELETE_BUILD,
    build
})

const _updateBuild = (build) => ({
    type: UPDATE_BUILD,
    build
})



export const getBuilds = () => async (dispatch) => {
    try {
    const {data:builds} = await axios.get('/api/builds')
    dispatch(_getBuilds(builds))
    }
    catch (error) {
        console.error(error);
    }
}

export const createStudent = (student) => {
	// return async (dispatch) => {
	// 	const { data: created } = await axios.post('/api/students', student);
	// 	dispatch(_createStudent(created));
	// };
};

export const deleteStudent = (id) => async (dispatch) => {
	// try {
	// 	const { data: deleted } = await axios.delete(`/api/students/${id}`);
	// 	dispatch(_deleteStudent(deleted));
    //     dispatch(getCampuses());
	// } catch (error) {
	// 	console.error(error);
	// }
};

export const updateStudent = (student, id) => async (dispatch) => {
	// try {
	// 	const { data: updated } = await axios.put(`/api/students/${id}`, student);
	// 	dispatch(_updateStudent(updated));
    //     dispatch(getCampuses());
	// } catch (error) {
	// 	console.error(error);
	// }
};



const initState = []
const buildsReducer = (state=initState, action) => {

    switch(action.type){
        case GET_BUILDS:
            return action.builds
        case CREATE_BUILD:
            let student = {...action.student}
            // if(!student.campus){
            //     student.campus = []
            // }
            return [...state, student];
        case DELETE_BUILD:
            return state.filter((student) => student.id !== action.student.id);
        case UPDATE_BUILD:
            console.log(action.student)
			return state.map((student) =>
				student.id === action.student.id ? {...action.student, campus: action.student.campus ? action.student.campus : student.campus} : student
			);
        default:
            return state 
    }
}

export default buildsReducer;