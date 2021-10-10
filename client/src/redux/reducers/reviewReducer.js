import * as types from "../types/reviewTypes";

const initialState = {
  announcementReviews: [],
};

const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ANNOUNCEMENT_REVIEW:
      return {
        ...state,
        announcementReviews: action.payload,
      };
    default:
      return state;
  }
};

export default reviewReducer;
