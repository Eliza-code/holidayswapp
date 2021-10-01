import axios from "axios";
import * as types from "../types/userTypes";


export function getHouses(name) {
    return async function (dispatch) {
      try {
        var json = ""   
        return dispatch({
          type: "GET_HOUSES",
          payload: json.data,
        });
      } catch (error) {
        console.log(error);
        alert("ciudad o pais no encontrado");
      }
    };
  }

export const postUser = (input) => {
  return async (dispatch) => {
    try{
      const { data } = await axios.post('http://localhost:3001/user/', input)
      return dispatch({
        type: types.POST_USER,
        payload: data,
      })
    }catch (error) {
      console.log(error);
    }
  }
}

export const postSignIn = (input) => {
  return async (dispatch) => {
    try{
      // const { data } = await axios.post('http://localhost:3001/user/signin', input)
      // return dispatch({
      //   type: types.POST_SIGN_IN,
      //   payload: data,
      // })
    }catch (error) {
      console.log(error);
    }
  }
}
