import axios from "axios";
import swal from "sweetalert";
import * as types from "../types/reviewTypes";
import { REVIEW_ID_URL, POST_REVIEW_URL, OWNER_ID_URL } from "../constants/urls";

export function getAnnouncementReviews(id) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${REVIEW_ID_URL}/${id}`);
      if( response.request.status === 200) {
        dispatch({ type: types.GET_ANNOUNCEMENT_REVIEW, payload: response.data });
      } else {
        console.log( "rompi todo")
      }
      
    } catch (e) {
      console.error(e);
    }
  };
}

export function createReview(userId, announcementId, stars, description) {
  return async function (dispatch) {
    const { data } = await axios.post(POST_REVIEW_URL, {
      announcementId,
      userId,
      stars,
      description,
    });
    await dispatch(getAnnouncementReviews(announcementId));
    data.success ? swal(data.success) : swal(data.error);
  };
}

export function getUserReviewDetails (id) {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`${OWNER_ID_URL}/${id}`);
      return dispatch({
        type: types.GET_USER_REVIEW,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
