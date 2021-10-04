import axios from "axios";
import swal from "sweetalert";
import * as types from "../types/userTypes";


export const postUser = (input) => {
  return async (dispatch) => {
    try {
      const {
        data
      } = await axios.post('http://localhost:3001/user/', input)
      dispatch({
        type: types.POST_USER,
        payload: data,
      })
      return data ? swal({
          title: "User Created",
          icon: "success",
        }) :
        swal({
          title: "Oops! Something went wrong!",
          icon: "warning",
        })

    } catch (error) {
      console.log(error)
      swal({
        title: "Oops! Something went wrong!",
        icon: "warning",
      })
    }
  }
}

export const postSignIn = (input) => {
  return async (dispatch) => {
    try {
      const {
        data
      } = await axios.post('http://localhost:3001/auth/login', input)
      console.log(data)
      return dispatch({
        type: types.POST_SIGN_IN,
        payload: data,
      })
    } catch (error) {
      console.log(error);
    }
  }
}