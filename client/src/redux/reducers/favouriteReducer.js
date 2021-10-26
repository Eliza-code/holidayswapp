import * as types from "../types/favouriteTypes";

const initialState = {
  favourite: [],

  actionFavourite: 0,
};

const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.POST_FAVOURITE:
      return {
        ...state,
      };

    case types.GET_FAVOURITE_ID:
      return {
        ...state,
        favourite: action.payload,
      };

    case types.DELETE_FAVOURITE:
      const filFavourite = state.favourite.filter(
        (e) => e.id !== action.payload
      );
      return {
        ...state,
        favourite: filFavourite,
        actionFavourite: state.actionFavourite + 1,
      };
    default:
      return state;
  }
};
export default favouriteReducer;
