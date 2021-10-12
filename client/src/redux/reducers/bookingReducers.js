import * as types from "../types/bookingTypes";

const initialState = {
  orders:{},
  orderCreated:{},
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ORDERS_BY_ID:
      return {
        ...state,
        orders: action.payload,
      };
      case types.POST_ORDER:
      return {
        ...state,
        order: action.payload,
      };
    default:
      return state;
  }
};

export default bookingReducer;
