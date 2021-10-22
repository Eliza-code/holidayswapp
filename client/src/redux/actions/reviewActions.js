import axios from "axios";
import swal from "sweetalert";
import * as types from "../types/reviewTypes";
import { BASE_URL } from "../constants/urls";

export function getAnnouncementReviews(id) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${BASE_URL}/review/getAnnouncement/${id}`);
      if( response.request.status === 200) {
        dispatch({ type: types.GET_ANNOUNCEMENT_REVIEW, payload: response.data });
      } else {
        console.log("rompi todo")
      }
      
    } catch (e) {
      console.error(e);
    }
  };
}

export function createReview({ userId, announcementId, stars, description }) {
  return async function (dispatch) {
    try {
      const { data } = await axios.post(`${BASE_URL}/review`, {
        announcementId,
        userId,
        stars,
        description,
      });
      // await axios.post(`${BASE_URL}/mails/reviewemail`, {
      //   announcementId,
      //   userId,
      //   stars,
      //   description,
      // });
      await dispatch(getAnnouncementReviews(announcementId));
      return data.success ? swal(data.success) : swal(data.error);
    } catch (error) {
      console.log(error);
    }
  };
}

export function getUserReviewDetails (id) {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`${BASE_URL}/user/getUser/${id}`);
      return dispatch({
        type: types.GET_USER_REVIEW,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
