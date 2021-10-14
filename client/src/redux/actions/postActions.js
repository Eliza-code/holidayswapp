import axios from "axios";
import swal from "sweetalert";
import * as types from "../types/postTypes";
import { BASE_URL } from '../constants/urls';

export function getHouses() {
    return async function (dispatch) {
      try {       
        const json = await axios.get(`${BASE_URL}/announcement`)   
        return dispatch({
          type: types.GET_HOUSES, payload: json.data});
      } catch (error) {
        console.log(error);
        alert("City not found");
      }
    };
  }

export function getHouseID(id) {
  return async function (dispatch) {
    try {
      var json = await axios.get(`${BASE_URL}/announcement/${id}`);
      return dispatch({ 
        type: types.GET_HOUSES_ID, payload: json.data})
    } catch(error) {
      console.log(error)
      alert('Place not found')
    }
  }
}

export function getHouseCity(city) {
  return async function(dispatch) {
      try {
          const json = await axios.get(`${BASE_URL}/announcement?name=${city}`);
          return dispatch({ type: types.GET_HOUSE_CITY, payload: json.data})
      } catch(error) {
          console.log(error)
          // alert("There's not houses avalaible on this city")
      }
  }
}

export function clearPage() {
  return { type: types.GET_HOUSE_CITY, payload: undefined };
}

export function postAnnouncements (input) {
  return async function (dispatch) {
    try {
      const { request } = await axios.post(`${BASE_URL}/announcement`, input)
      dispatch({ type: types.POST_ANNOUNCEMENT });
      if (request.status === 200) {
        window.location.href = "/profile"
      } else {
        swal({
          title: "Oops! Something went wrong!",
          icon: "warning",
        });
      }
    } catch (e) {
      console.error(e)
    }
  }
}

export function deleteAnnouncement(id){
  return async function (dispatch) {
    try{
      const { request } = await axios.delete(`${BASE_URL}/announcement/deleteAnnouncement/${id}`)
      if(request.status === 200 ){
        dispatch({ type: types.DELETE_ANNOUNCEMENT });
      } else {
        swal({
          title: "Oops! Something went wrong, try again!",
          icon: "warning",
        });
      }
    }catch (e) {
      console.error(e);
    }
  }
}