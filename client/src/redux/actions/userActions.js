import axios from "axios";
import swal from "sweetalert";
import * as types from "../types/userTypes";
import { BASE_URL } from '../constants/urls';

export const postUser = (input) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/user`, input);
      dispatch({ type: types.POST_USER });
      if( data )  {
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
    try {
      const { data } = await axios.post(`${BASE_URL}/auth/login`, input);
      if (Object.keys(data).length) {
        dispatch({ type: types.POST_SIGN_IN });
        window.localStorage.setItem("user", JSON.stringify(data.token))
        window.location.href = '/';
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

export const login = (status) => {
  if (status) {
    return {
      type: types.USER_AUTH_SUCCESS,
      payload: status
    }
  } else {
    return {
      type: types.USER_AUTH_FAILED,
      payload: status
    }
  }
}

export const getUserInfo = () => {
  console.log("entro al action")
  return async (dispatch) => {
    try {
      dispatch({ type: types.USER_AUTH_REQUEST });
      const TOKEN = JSON.parse(window.localStorage.getItem("user"));      
      if (TOKEN) {
        const config = { headers: { Authorization: `Bearer ${TOKEN}` } };
        const response = await axios.get(`${BASE_URL}/auth/profile`, config);
        if (response.request.status === 200) {
          // window.localStorage.setItem("userInfo", JSON.stringify(response.data));
          dispatch({ type: types.USER_AUTH_SUCCESS, payload: response.data });
        }
      } else {
        dispatch({ type: types.USER_AUTH_FAILED });
        // window.localStorage.removeItem("userInfo");
        // swal({
        //   title: "Authentication failed",
        //   icon: "warning",
        // });
      }
    } catch (error) {
      dispatch({ type: types.USER_AUTH_FAILED });
      console.log(error);
      window.localStorage.removeItem("user");
      // window.localStorage.removeItem("userInfo");
      swal({
        title: "Internal error server",
        icon: "warning",
      });
    }
  }
}

export const signOut = () => {
  return async (dispatch) => {
    try{
      const { data } = await axios.get(`${BASE_URL}/auth/logout`);
      if (data) {
        dispatch({ type: types.SIGN_OUT_SUCCESS });
        window.localStorage.removeItem('user')
        window.localStorage.removeItem('userInfo') 
        swal({
          title: "You have sign out",
          icon: "success",
        });
        window.location.href = '/';
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

export function getOwnerDetails (id) {
  return async function (dispatch) {
    try {
      const { data } = await axios.get( `${BASE_URL}/user/getUser/${id}`);
      return dispatch({
        type: types.GET_OWNER_ID,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

