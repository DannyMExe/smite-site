import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import studentsReducer from "./studentsReducer";
import buildsReducer from "./buildsReducer";


const rootReducer = combineReducers({
    students: studentsReducer,
    builds: buildsReducer
})


    const store = createStore(rootReducer, applyMiddleware(thunk));


export default store;