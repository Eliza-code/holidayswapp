import axios from "axios";
import swal from "sweetalert";
import * as types from "../types/postTypes";

export function getHouses() {
  return async function (dispatch) {
    try {
      const json = await axios.get(`/announcement`);
      return dispatch({
        type: types.GET_HOUSES,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getHouseID(id) {
  return async function (dispatch) {
    try {
      var json = await axios.get(`/announcement/${id}`);
      return dispatch({
        type: types.GET_HOUSES_ID,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getHouseCity(city) {
  return async function (dispatch) {
    try {
      const json = await axios.get(`/announcement?name=${city}`);
      return dispatch({ type: types.GET_HOUSE_CITY, payload: json.data });
    } catch (error) {
      console.log(error);
    }
  };
}

export function clearPage() {
  return { type: types.GET_HOUSE_CITY, payload: undefined };
}

export function postAnnouncements(input) {
  return async function (dispatch) {
    try {
      const { request } = await axios.post(`/announcement`, input);
      dispatch({ type: types.POST_ANNOUNCEMENT });
      if (request.status === 200) {
        window.location.href = "/profile";
      } else {
        swal({
          title: "Oops! Something went wrong!",
          icon: "warning",
        });
      }
    } catch (e) {
      console.error(e);
    }
  };
}

export function orderByPoints(payload) {
  return {
    type: types.ORDER_BY_POINTS,
    payload,
  };
}

export function orderByRating(payload) {
  return {
    type: types.ORDER_BY_RATING,
    payload,
  };
}
export function filterBySleeps(payload) {
  return {
    type: types.FILTER_BY_SLEEPS,
    payload,
  };
}
export function filterByType(payload) {
  return {
    type: types.FILTER_BY_TYPE,
    payload,
  };
}

export function deleteAnnouncement(id) {
  return async function (dispatch) {
    try {
      const { request } = await axios.delete(
        `/announcement/deleteAnnouncement/${id}`
      );
      if (request.status === 200) {
        dispatch({ type: types.DELETE_ANNOUNCEMENT });
      } else {
        swal({
          title: "Oops! Something went wrong, try again!",
          icon: "warning",
        });
      }
    } catch (e) {
      console.error(e);
    }
  };
}
