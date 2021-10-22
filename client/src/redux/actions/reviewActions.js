import axios from "axios";
import swal from "sweetalert";
import * as types from "../types/reviewTypes";


export function getAnnouncementReviews(id) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`/review/getAnnouncement/${id}`);
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
      const { data } = await axios.post(`/review`, {
        announcementId,
        userId,
        stars,
        description,
      });
      // await axios.post(`/mails/reviewemail`, {
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
      const { data } = await axios.get(`/user/getUser/${id}`);
      return dispatch({
        type: types.GET_USER_REVIEW,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
