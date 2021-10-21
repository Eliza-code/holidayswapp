import axios from "axios";
import swal from "sweetalert";
import Swal from "sweetalert2";
import * as types from "../types/adminTypes";


export function getAllUsers() {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`/user/getAll`);
      return dispatch({
        type: types.GET_ALL_USERS,
        payload: data,
      });
    } catch (e) {
      console.log(e);
    }
  };
}

export function deleteUser(id) {
  return async function (dispatch) {
    try {
      const { request } = await axios.delete(
        `/user/deleteUser/${id}`
      );
      if (request.status === 200) {
        dispatch({ type: types.DELETE_USER });
      } else {
        swal({
          title: "Oops! Something went wrong, try again!",
          icon: "warning",
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
}

export function getAllAnnouncements() {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`/announcement`);
      return dispatch({
        type: types.GET_ALL_ANNOUNCEMENTS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
      swal("City not found");
    }
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

export function setNewAdmin(id) {
  return async function (dispatch) {
    try {
      const token = JSON.parse(window.localStorage.getItem("user"));
      if (token) {
        const { data, request } = await axios.post(
          `/auth/setAdmin`,
          { token, idUser: id }
        );
        if (request.status === 200) {
          dispatch({
            type: types.ADMIN_CHANGE_STATUS_SUCCESS,
            payload: data.isAdmin,
          });
          Swal.fire("Saved!", "", "success");
        }
      } else {
        dispatch({ type: types.ADMIN_CHANGE_STATUS_FAILED });
        window.location.href = "/";
        Swal.fire("Something went wrong!", "", "error");
      }
    } catch (e) {
      console.log(e);
      dispatch({ type: types.ADMIN_CHANGE_STATUS_FAILED });
     
    }
  };
}
