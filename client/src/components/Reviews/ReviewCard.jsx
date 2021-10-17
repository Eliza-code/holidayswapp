import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { getUserReviewDetails } from "../../redux/actions/reviewActions";


const ReviewCard = ({ review }) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.reviewReducer.userDetails);

  useEffect(() => {
    dispatch(getUserReviewDetails(review.userId));
  }, [dispatch, review.userId]);

  return (
      <Grid
        container
        justifyContent="center"
        component={Paper}
        elevation={3}
        sx={{ p: 2 }}
      >
          <Grid item>
            <Avatar sx={{ width: 100, height: 100 }} src={user.profilePicture} alt={user.username} />
          </Grid>
          <Grid item>
            <Typography sx={{ p: 3 }} variant="body2" color="text.primary">
              <b>{user.name} {user.lastName}</b>
            </Typography>
          </Grid>
          <Grid item>
            <Rating name="read-only" readOnly value={review.stars} />
          </Grid>
          <Grid item>
            <Typography variant="body2" color="text.primary">
                {review.description}
              </Typography>
          </Grid>
      </Grid>
  );
};

export default ReviewCard;