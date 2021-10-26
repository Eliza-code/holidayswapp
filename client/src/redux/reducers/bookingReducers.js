import * as types from "../types/bookingTypes";

const initialState = {
  ordersByUser: [],
  ordersToUser: [],
  orders: {},
  orderCreated: [],
  orderUpdated: undefined,
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USER_ORDERS:
      return {
        ...state,
        ordersByUser: action.payload,
      };
    case types.GET_ORDERS_TO_USER:
      return {
        ...state,
        ordersToUser: action.payload,
      };
    case types.POST_ORDER:
      return {
        ...state,
        orderCreated: action.payload,
      };
    case types.UPDATE_ORDER_STATUS:
      return {
        ...state,
        orderUpdated: action.payload,
      };
    default:
      return state;
  }
};

export default bookingReducer;
