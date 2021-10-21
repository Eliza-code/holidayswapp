import * as types from '../types/bookingTypes';
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
  //console.log("order--:", order);
    return async function (dispatch) {
        try {
          const dato = await axios.post(`/order/addOrder`, order);         
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
          const data = await axios.post(`/order/updateOrderStatus`,input);
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

 




