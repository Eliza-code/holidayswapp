import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

const ReviewCard = ({ review }) => {
  const { user } = review;

  return (
    <Grid
      container
      justifyContent="center"
      component={Paper}
      elevation={3}
      sx={{ p: 2 }}
    >
      <Grid item>
        <Avatar
          sx={{ width: 100, height: 100 }}
          src={user.profilePicture}
          alt={user.username}
        />
      </Grid>
      <Grid item>
        <Typography sx={{ p: 3 }} variant="body2" color="text.primary">
          <b>{user.username} </b>
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
