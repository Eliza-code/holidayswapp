import userReducer from '../reducers/userReducers';
import postReducer from '../reducers/postReducers';
import {combineReducers} from 'redux';

export default combineReducers({
    userReducer,
    postReducer
});

