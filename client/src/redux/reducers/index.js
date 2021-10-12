import userReducer from '../reducers/userReducers';
import postReducer from '../reducers/postReducers';
import favouriteReducer from '../reducers/favouriteReducer';
import reviewReducer from '../reducers/reviewReducer';
import bookingReducer from '../reducers/bookingReducers';
import { combineReducers } from 'redux';

export default combineReducers({
    userReducer,
    postReducer,
    favouriteReducer,
    reviewReducer,
    bookingReducer
});

