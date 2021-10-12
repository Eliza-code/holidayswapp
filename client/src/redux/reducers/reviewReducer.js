import * as types from "../types/reviewTypes";

const initialState = {
  announcementReviews: [],
  userDetails: {},
};

const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ANNOUNCEMENT_REVIEW:
      return {
        ...state,
        announcementReviews: action.payload,
      };

    case types.GET_USER_REVIEW:
      return {
        ...state,
        userDetails: action.payload
      }
    
    default:
      return state;
  }
};

export default reviewReducer;
