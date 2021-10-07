import axios from "axios";
import swal from "sweetalert";
import * as types from "../types/userTypes";
import { SIGN_IN_URL, SIGN_UP_URL, SIGN_OUT_URL, USER_ID_URL } from '../constants/urls';

export const postUser = (input) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(SIGN_UP_URL, input);
      dispatch({ type: types.POST_USER });
      if( data.length > 20 )  {
        window.localStorage.setItem("user", JSON.stringify(data))
        window.location.href = '/'
      } else {
        swal({
          title: "Oops! Something went wrong!",
          icon: "warning",
        });

      }
    } catch (error) {
      console.log(error);
      swal({
        title: "Oops! Something went wrong!",
        icon: "warning",
      });
    }
  };
};

export const postSignIn = (input) => {
  return async (dispatch) => {
    // Agregar control isAdmin / isDeleted
    try {
      const { data } = await axios.post(SIGN_IN_URL, input);
      if (Object.keys(data).length) {
        dispatch({ type: types.POST_SIGN_IN });
        window.localStorage.setItem("user", JSON.stringify(data.token))
        window.location.href = '/'
      } else {
        swal({
          title: "User or password incorrect",
          icon: "warning",
        });
      }
    } catch (error) {
      console.log(error);
      swal({
        title: "System failed. Please, try again",
        icon: "warning",
      });
    }
  };
};

export const signOut = () => {
  return async (dispatch) => {
    try{
      const { data } = await axios.get(SIGN_OUT_URL);
      if (data) {
        dispatch({ type: types.SIGN_OUT_SUCCESS });
        window.localStorage.removeItem('user')
        window.localStorage.removeItem('userInfo') 
        swal({
          title: "You have sign out",
          icon: "success",
        })
        window.location.href = '/'
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: types.SIGN_OUT_FAILED });
      swal({
        title: "Try again",
        icon: "success",
      })
    }
  }
}

export function getUserDetails (id) {
  return async function (dispatch) {
    try {
      var { data } = await axios.get(`${USER_ID_URL}/${id}`);
      return dispatch({
        type: types.GET_USER_ID,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
