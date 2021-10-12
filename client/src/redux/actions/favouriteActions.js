import axios from "axios";
import * as types from "../types/favouriteTypes";
import {
  BASE_URL,
} from "../constants/urls";

export function addAnnouncementFavourite(input) {
  return async function (dispatch) {
    try {
      const { data } = await axios.post(`${BASE_URL}/favourite/createFavourite`, input);
      dispatch({ type: types.POST_FAVOURITE });
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };
}


export function getFavourite() {
  return async function (dispatch) {
    try {
      const favourite = await axios.get(`${BASE_URL}/favourite/getAllFavourites`);
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
    await axios.delete(`${BASE_URL}/favourite/deleteFavourite/${id}`);
    dispatch({ type: types.DELETE_FAVOURITE, payload: id });
  };
}

export function getFavouriteId(id) {
  return async function (dispatch) {
    try {
      const favourite = await axios.get(`${BASE_URL}/review/getAnnouncement/${id}`);
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
