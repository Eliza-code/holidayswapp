import axios from "axios";
import * as types from "../types/favouriteTypes";
import {
  FAVOURITE_URL,
  FAVOURITE_ID,
  DELETE_FAVOURITE_URL,
  POST_FAVOURITE_URL,
} from "../constants/urls";

export function addAnnouncementFavourite(obj) {
  console.log('objeto ontherock',obj)
  return async function() { 
      await axios.post(POST_FAVOURITE_URL, obj);
  };
}


export function getFavourite() {
  return async function (dispatch) {
    try {
      const favourite = await axios.get(FAVOURITE_URL);
      return dispatch({
        type: types.GET_FAVOURITE,
        payload: favourite.data,
      });
    } catch (error) {
      console.log(error);
      alert("Favourite not found");
    }
  };
}

export function deleteFavourite(id) {
  return async function (dispatch) {
    await axios.delete(`${DELETE_FAVOURITE_URL}/${id}`);
    dispatch({ type: types.DELETE_FAVOURITE, payload: id });
  };
}

export function getFavouriteId(id) {
  return async function (dispatch) {
    try {
      const favourite = await axios.get(`${FAVOURITE_URL}/${id}`);
      return dispatch({
        type: types.GET_FAVOURITE_ID,
        payload: favourite.data
      });
    } catch (error) {
      console.log(error);
      alert("Favourite not found");
    }
  };
}
