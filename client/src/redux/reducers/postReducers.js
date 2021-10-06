import * as types from "../types/postTypes";
const initialState = {
  homeInfo: [],
  userInfo: [],
  searchResults: [],
  houses: [],
  userDetails: [],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_HOUSES:
      return {
        ...state,
        houses: action.payload,
      };
    case types.GET_HOUSES_ID:
      return {
        ...state,
        homeInfo: action.payload,
      };
    case types.GET_HOUSE_CITY:
      return {
        ...state,
        searchResults: action.payload,
      };
    case types.GET_USER_ID:
      return {
        ...state,
        userDetails: action.payload,
      };

    default:
      return state;
  }
};

export default postReducer;
