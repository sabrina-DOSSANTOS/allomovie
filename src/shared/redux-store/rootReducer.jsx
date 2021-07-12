import { combineReducers } from "redux";
import MovieReducer from './reducers/movieReducer';


/**
 * Combine all the reducers create in different files, to add them in the redux-store
 * 
 * @author sabrina vds
 */
export default combineReducers({
    MovieReducer
})