import * as types from '../types/bookingTypes';
import {
    BASE_URL,
    ORDERS_GET_BY_ID_URL,
  } from "../constants/urls";
import axios from 'axios';

export function getOrdersById(input) {
    return async function (dispatch) {
        try {
          const orders = await axios.get(`${BASE_URL}/order/getOrderById/${input}`);
          return dispatch({
            type: types.GET_ORDERS_BY_ID,
            payload: orders.data,
          });
        } catch (error) {
          console.log(error);
          alert("Orders not found");
        }
    };
}

export function postOrder(input) {
    return async function (dispatch) {
        try {
          const order = await axios.post(`${BASE_URL}/order/addOrder`, input);
          return dispatch({
            type: types.POST_ORDER,
            payload: order.data,
          });
        } catch (error) {
          console.log(error);
          alert("Order not created");
        }
    };
}

 




