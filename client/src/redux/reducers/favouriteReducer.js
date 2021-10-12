import * as types from "../types/favouriteTypes";

const initialState = {
  favourite: [],
  filteredFavourite: [],
};

const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_FAVOURITE:
      return {
        ...state,
        favourite: action.payload,
      };
    // case types.GET_FAVOURITE_ID:
    //   return {
    //     ...state,
    //     filteredFavourite: state.favourite.filter((e) =>
    //       e.id.includes(action.payload)
    //     ),
    //   };
    case types.GET_FAVOURITE_ID:
      return {
        ...state,
        favourite: action.payload        
      };
    case types.ADD_ANNOUNCEMENT_FAVOURITE:
      return {
        ...state,
        favourite: state.favourite,
      };
    case types.DELETE_FAVOURITE:
      return {
        ...state,
        favourite: state.favourite,
      };
    default:
      return state;
  }
};
export default favouriteReducer;
