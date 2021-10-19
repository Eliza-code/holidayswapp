import axios from "axios";
import swal from "sweetalert";
import * as types from "../types/userTypes";
import { BASE_URL } from '../constants/urls';

export const postUser = (input) => {
  return async (dispatch) => {
    try {
      const { request } = await axios.post(`${BASE_URL}/user`, input);
      dispatch({ type: types.POST_USER });
      if (request.status === 200)  {
        const { username, password } = input;
        const { data, request } = await axios.post(`${BASE_URL}/auth/login`, { username, password });
        if (request.status === 200) {
          window.localStorage.setItem("user", JSON.stringify(data.token));
          window.location.href = '/';
        } else {
          window.location.href = '/signin';
        }
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

export const isAdmin =() => {
  return async (dispatch) => {
    try {
      const token = JSON.parse(window.localStorage.getItem("user"))
      if (token) {
        const { data, request } = await axios.post(`${BASE_URL}/auth/admin`, { token });
        return request.status === 200
          ? dispatch({ type: types.ADMIN_AUTH_SUCCESS, payload: data })
          : dispatch({ type: types.ADMIN_AUTH_FAILED, payload: data });
      }
    } catch(err){
      console.log(err);
    }
  }

}


export const getUserInfo = () => {
 
  return async (dispatch) => {
    try {
      dispatch({ type: types.USER_AUTH_REQUEST });
      const TOKEN = JSON.parse(window.localStorage.getItem("user"));      
      if (TOKEN) {
        const config = { headers: { Authorization: `Bearer ${TOKEN}` } };
        const { request, data } = await axios.get(`${BASE_URL}/auth/profile`, config);
        if (request.status === 200) {
          dispatch({ type: types.USER_AUTH_SUCCESS, payload: data });
          dispatch(isAdmin());
        }
      } else {
        dispatch({ type: types.USER_AUTH_FAILED });
      }
    } catch (error) {
      dispatch({ type: types.USER_AUTH_FAILED });
      console.log(error);
      window.localStorage.removeItem("user");
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

export const getHousesByUserId = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/announcement`);
      if (data.length) {
        const houses = data.filter((elem) => elem.userId === id);
        return dispatch({
          type: types.GET_HOUSES_BY_USER_ID,
          payload: houses
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
}
export const updateHouseForm = (id, input) => {
  return async (dispatch) => {
    try{
      const { request, data } = await axios.put(`${BASE_URL}/announcement/updateAnnouncement/${id}`, input);
      if (request.status === 200 ){
        dispatch({ 
          type: types.UPDATE_HOUSE_SUCCESS,
          payload: data
        })
        window.location.reload();
      } else {
        swal({
          title: "Try again",
          icon: "success",
        })
      }
    }catch (e) {
      console.log(e);
    }
  }
}

export const updateUserProfile = (userId, input) => {
  return async (dispatch) => {
    try {
      const { data, request } = await axios.put(`${BASE_URL}/user/updateUser/${userId}`, input);
      return request.status === 200
        ? dispatch({ type: types.UPDATE_USER_SUCCESS, payload: data })
        : dispatch({ type: types.UPDATE_USER_FAILED });
    } catch (error) {
      console.log(error);
      dispatch({ type: types.UPDATE_USER_FAILED });
    }
  }
}