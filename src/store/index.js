import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import buildsReducer from "./buildsReducer";
import godsReducer from "./godsReducer";
import itemsReducer from "./itemsReducer";
import usersReducer from "./usersReducer";


const rootReducer = combineReducers({
    gods: godsReducer,
    items: itemsReducer,
    builds: buildsReducer,
    users: usersReducer
})


    const store = createStore(rootReducer, applyMiddleware(thunk));


export default store;