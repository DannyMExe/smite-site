import axios from 'axios';

const GET_STUDENTS = 'GET_STUDENTS';
const CREATE_STUDENT = 'CREATE_STUDENT';
const DELETE_STUDENT = 'DELETE_STUDENT';
const UPDATE_STUDENT = 'UPDATE_STUDENT';


const _getStudents = (students) => ({
    type: GET_STUDENTS,
    students
})

const _createStudent = (student) => ({
    type: CREATE_STUDENT,
    student
})

const _deleteStudent = (student) => ({
    type: DELETE_STUDENT,
    student
})

const _updateStudent = (student) => ({
    type: UPDATE_STUDENT,
    student
})



export const getStudents = () => async (dispatch) => {
    // try {
    // const {data:students} = await axios.get('/api/students')
    // dispatch(_getStudents(students))
    // }
    // catch (error) {
    //     console.error(error);
    // }
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
const studentsReducer = (state=initState, action) => {

    switch(action.type){
        case GET_STUDENTS:
            return action.students
        case CREATE_STUDENT:
            let student = {...action.student}
            // if(!student.campus){
            //     student.campus = []
            // }
            return [...state, student];
        case DELETE_STUDENT:
            return state.filter((student) => student.id !== action.student.id);
        case UPDATE_STUDENT:
            console.log(action.student)
			return state.map((student) =>
				student.id === action.student.id ? {...action.student, campus: action.student.campus ? action.student.campus : student.campus} : student
			);
        default:
            return state 
    }
}

export default studentsReducer;