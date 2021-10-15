import * as types from "../types/postTypes";

const initialState = {
  homeInfo: {},
  searchResults: [],
  houses: [],
  currentPostId: JSON.parse(window.localStorage.getItem("currentPost"))
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
    case types.POST_ANNOUNCEMENT: 
    return {
      ...state
    };
    case types.DELETE_ANNOUNCEMENT: 
      return {
        ...state
      }
   
    default:
      return state;
  }
};

export default postReducer;
