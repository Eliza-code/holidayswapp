import axios from "axios";
import * as types from "../types/userTypes";


export function getHouses(name) {
    return async function (dispatch) {
      try {
        const json = await axios.get("http://localhost:3001/announcement")   
        return dispatch({
          type: types.GET_HOUSES, payload: json.data});
      } catch (error) {
        console.log(error);
        alert("ciudad o pais no encontrado");
      }
    };
  }

export function getHouseID(id) {
  return async function (dispatch) {
    try {
      var json = await axios.get(`http://localhost:3001/announcement/${id}`);
      return dispatch({ 
        type: types.GET_HOUSES_ID, payload: json.data})
    } catch(error) {
      console.log(`No se encontró la casa con id ${id}`)
    }
  }
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
      const { data } = await axios.post('http://localhost:3001/user/signin', input)
      return dispatch({
        type: types.POST_SIGN_IN,
        payload: data,
      })
    }catch (error) {
      console.log(error);
    }
  }
}
