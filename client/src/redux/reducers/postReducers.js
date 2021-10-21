import * as types from "../types/postTypes";

const initialState = {
  homeInfo: {},
  searchResults: [],
  houses: [],
  allSearchResults: [],  
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
        allSearchResults: action.payload,
      };
    case types.POST_ANNOUNCEMENT:
      return {
        ...state,
      };
    case types.ORDER_BY_POINTS:
      let sortedPoints =
        action.payload === "mayor"
          ? state.searchResults.sort(function (a, b) {
              return b.points - a.points;
            })
          : state.searchResults.sort(function (a, b) {
              return a.points - b.points;
            });

      return {
        ...state,
        searchResults: sortedPoints,
      };
    case types.ORDER_BY_RATING:      
      let sortedRating =
        action.payload === "mayor"
          ? state.searchResults.sort(function (a, b) {
              return b.rating - a.rating;
            })
          : state.searchResults.sort(function (a, b) {
              return a.rating - b.rating;
            });

      return {
        ...state,
        searchResults: sortedRating,
      };
    case types.FILTER_BY_SLEEPS:
      const allResults = state.allSearchResults;      
      const sleepsFiltered =
        action.payload === "All"
          ? allResults
          : allResults.filter((el) => {
              return el.sleeps === (Number(action.payload));
            });

      return {
        ...state,
        searchResults: sleepsFiltered,
      };

    case types.FILTER_BY_TYPE:
      const allResult = state.allSearchResults;
      const typeFiltered =
        action.payload === "All"
          ? allResult
          : allResult.filter((el) => el.type === action.payload);

      return {
        ...state,
        searchResults: typeFiltered,
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
