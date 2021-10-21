import * as types from '../types/bookingTypes';
import {
    BASE_URL,
    ORDERS_GET_BY_ID_URL,
  } from "../constants/urls";
import axios from 'axios';

export function getUserOrders(input) {
    return async function (dispatch) {
        try {
          const orders = await axios.get(`${BASE_URL}/order/getUserOrders/${input}`);
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
          const orders = await axios.get(`${BASE_URL}/order/getOrdersUser/${input}`);
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
  //console.log("order--:", order);
    return async function (dispatch) {
        try {
          const dato = await axios.post(`${BASE_URL}/order/addOrder`, order);
          await axios.post(`${BASE_URL}/mails/reservationconfirmed`, order);
          //console.log(dato)
          dispatch({
            type: types.POST_ORDER,
            payload: dato,
          });
        } catch (error) {
          console.log(error);          
        }
    };
}

export function updateOrderStatus(input) {
    return async function (dispatch) {
        try {
          const data = await axios.post(`${BASE_URL}/order/updateOrderStatus`,input);
          console.log(data)
          dispatch({
            type: types.UPDATE_ORDER_STATUS,
            payload: data,
          });
         
        } catch (error) {
          console.log(error);         
        }
    };
}

 




