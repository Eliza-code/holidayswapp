import * as types from '../types/bookingTypes';
import {
    BASE_URL,
    ORDERS_GET_BY_ID_URL,
  } from "../constants/urls";
import axios from 'axios';

export function getUserOrders(input) {
    return async function (dispatch) {
        try {
          const orders = await axios.get(`/order/getUserOrders/${input}`);
          return dispatch({
            type: types.GET_USER_ORDERS,
            payload: orders.data,
          });
        } catch (error) {
          console.log(error);
          
        }
    };
}
export function getOrdersToUser (input) {
    return async function (dispatch) {
        try {
          const orders = await axios.get(`/order/getOrdersUser/${input}`);
          return dispatch({
            type: types.GET_ORDERS_TO_USER,
            payload: orders.data,
          });
        } catch (error) {
          console.log(error);
         
        }
    };
}

export function postOrder(order) {
    return async function (dispatch) {
        try {
          const dato = await axios.post(`/order/addOrder`, order);
          console.log(dato)
          dispatch({
            type: types.POST_ORDER,
            payload: dato,
          });
        } catch (error) {
          console.log(error);
          alert("Order not created");
        }
    };
}

export function updateOrderStatus(input) {
    return async function (dispatch) {
        try {
          const data = await axios.post(`/order/updateOrderStatus`,input);
          console.log(data)
          dispatch({
            type: types.UPDATE_ORDER_STATUS,
            payload: data,
          });
         
        } catch (error) {
          console.log(error);
          alert("Not Updated");
        }
    };
}

 




