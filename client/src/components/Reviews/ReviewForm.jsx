import React from "react";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import Swal from "sweetalert2";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { createReview } from "../../redux/actions/reviewActions";
import "./Reviews.css";

const initialValues = {
  stars: 0,
  description: "",
};

const ReviewForm = ({ userId, announcementId, handleClose }) => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    const review = {
      announcementId,
      userId,
      stars: parseInt(values.stars),
      description: values.description,
    };
    if (!values.stars) {
      Swal.fire("Assign a rating for this house");
    } else if (!values.description) {
      Swal.fire("Add a description for this house");
    } else {
      dispatch(createReview(review));
      handleClose();
    }
  };

  return (
    <Grid
      container
      justifyContent="center"
      component="main"
      sx={{ height: "50vh" }}
    >
      <Grid item component={Paper} xs={12} sm={8} elevation={4}>
        <Box
          sx={{
            my: 5,
            mx: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {({ values, handleChange, handleSubmit }) => (
              <Box
                component="form"
                onSubmit={handleSubmit}
                direction="column"
                textAlign="center"
              >
                <Typography gutterBottom variant="h5">
                  Leave a review
                </Typography>
                <Rating
                  name="stars"
                  value={parseInt(values.stars)}
                  onChange={handleChange}
                />
                <TextField
                  required
                  id="description"
                  name="description"
                  fullWidth
                  multiline
                  rows={5}
                  margin="normal"
                  label="Description"
                  placeholder="Add your review"
                  value={values.description}
                  onChange={handleChange}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Create review
                </Button>
              </Box>
            )}
          </Formik>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ReviewForm;
