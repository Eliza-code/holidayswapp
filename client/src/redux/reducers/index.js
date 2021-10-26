import { combineReducers } from "redux";
import adminReducer from "../reducers/adminReducer";
import userReducer from "../reducers/userReducers";
import postReducer from "../reducers/postReducers";
import favouriteReducer from "../reducers/favouriteReducer";
import reviewReducer from "../reducers/reviewReducer";
import bookingReducer from "../reducers/bookingReducers";

export default combineReducers({
  adminReducer,
  userReducer,
  postReducer,
  favouriteReducer,
  reviewReducer,
  bookingReducer,
});
