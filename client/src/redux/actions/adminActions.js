import axios from "axios";
import swal from "sweetalert";
import * as types from "../types/adminTypes";
import { BASE_URL } from "../constants/urls";

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
        try{
            const { request } = await axios.delete(`/user/deleteUser/${id}`)
            if(request.status === 200 ){
                dispatch({ type: types.DELETE_USER });
              } else {
                swal({
                  title: "Oops! Something went wrong, try again!",
                  icon: "warning",
                });
              }
        }catch (e) {
            console.log(e);
        }
    }
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

export function deleteAnnouncement(id){
    return async function (dispatch) {
      try{
        const { request } = await axios.delete(`/announcement/deleteAnnouncement/${id}`)
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
  