import axios from "axios";
import swal from "sweetalert";
import * as types from "../types/reviewTypes";
import { REVIEW_ID_URL, POST_REVIEW_URL } from "../constants/urls";

export function getAnnouncementReviews(id) {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`${REVIEW_ID_URL}/${id}`);
      dispatch({ type: types.GET_ANNOUNCEMENT_REVIEW, payload: data });
      console.log(data);
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
