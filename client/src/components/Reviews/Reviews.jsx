import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAnnouncementReviews } from "../../redux/actions/reviewActions";
import ReviewCard from "./ReviewCard";
import Grid from "@mui/material/Grid";

const Reviews = ({ announcementId }) => {
  const dispatch = useDispatch();

  const reviews = useSelector(
    (state) => state.reviewReducer.announcementReviews
  );

  useEffect(() => {
    dispatch(getAnnouncementReviews(announcementId));
  }, [dispatch, announcementId]);

  return (
    <Grid container justifyContent="center" spacing={2}>
      {reviews.length
        ? reviews.map((review, idx) => (
            <Grid key={idx} item xs={3}>
              <ReviewCard review={review} />
            </Grid>
          ))
        : null}
    </Grid>
  );
};

export default Reviews;
