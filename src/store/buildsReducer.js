import axios from 'axios';

const GET_BUILDS = 'GET_BUILDS';
const CREATE_BUILD = 'CREATE_BUILD';
const DELETE_BUILD = 'DELETE_BUILD';
const UPDATE_BUILD = 'UPDATE_BUILD';

const _getBuilds = (builds) => ({
	type: GET_BUILDS,
	builds,
});

const _createBuild = (build) => ({
	type: CREATE_BUILD,
	build,
});

const _deleteBuild = (build) => ({
	type: DELETE_BUILD,
	build,
});

const _updateBuild = (build) => ({
	type: UPDATE_BUILD,
	build,
});

export const getBuilds = () => async (dispatch) => {
	try {
		const { data: builds } = await axios.get('/api/builds');
		dispatch(_getBuilds(builds));
	} catch (error) {
		console.error(error);
	}
};

export const createBuild = (build) => async (dispatch) => {
	try {
		const { data: created } = await axios.post('/api/builds', build);
		dispatch(_createBuild(created));
		dispatch(getBuilds());
	} catch (error) {
		console.error(error);
	}
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

export const updateBuild = (build, id) => async (dispatch) => {
	try {
		const { data: updated } = await axios.put(`/api/builds/${id}`, build);
		dispatch(_updateBuild(updated));
		dispatch(getBuilds());
	} catch (error) {
		console.error(error);
	}
};

const initState = [];
const buildsReducer = (state = initState, action) => {
	switch (action.type) {
		case GET_BUILDS:
			return action.builds;
		case CREATE_BUILD:
			let build = { ...action.build };
			return [...state, build];
		case DELETE_BUILD:
			return state.filter((student) => student.id !== action.student.id);
		case UPDATE_BUILD:
			return state.map((build) =>
				build.build_id === action.build.build_id ? {...action.build, god: build.god, items: build.items} : build
			);
		default:
			return state;
	}
};

export default buildsReducer;
