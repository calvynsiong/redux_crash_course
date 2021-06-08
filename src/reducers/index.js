import { combineReducers } from 'redux';
import counterReducer from './counter';
import loggedReducer from './isLogged';

const allReducers = combineReducers({
    counterReducer,
    loggedReducer
})

export default allReducers