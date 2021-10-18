import React from "react";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { createReview } from '../../redux/actions/reviewActions';

const initialValues = {
  stars: 0,
  description: "",
};

const validate = (values) => {
  const errors = {};
  if (!values.description) {
    errors.description = "Required";
  } else if (values.description.length < 10) {
    errors.description = "Must contain more than 10 characters";
  }
  return errors;
};

const ReviewForm = ({ userId, announcementId, handleClose }) => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    console.log('soy handle submit review', values);
    const review = {
      announcementId,
      userId,
      stars: parseInt(values.stars),
      description: values.description
    }
    dispatch(createReview(review))
    handleClose();
  };
   
  return (
    <Grid
      container
      justifyContent="center"
      component="main"
      sx={{ height: "50vh" }}
    >
      <Grid item component={Paper} xs={12} sm={8}  elevation={4}>
        <Box
          sx={{
            my: 5,
            mx: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validate={validate}
          >
            {({
              values,
              handleChange,
              handleSubmit,
              // handleBlur,
              // touched,
              // errors,
              isSubmitting,
            }) => (
             
              <Box 
              component="form" 
              onSubmit={handleSubmit}
              direction="column" textAlign="center" 
              >
                <Typography gutterBottom variant="h5" >Leave a review</Typography>
                <Rating
                  name="stars"
                  value={parseInt(values.stars)}
                  onChange={handleChange}
                />
                <TextField
                  id="description"
                  name="description"
                  required
                  fullWidth
                  multiline
                  rows={5}
                  margin="normal"
                  label="Description"
                  placeholder="Add your review"
                  value={values.description}
                  onChange={handleChange}
                  // handleBlur={handleBlur}
                  // errors={Boolean(
                  //   errors.description &&
                  //     touched.description &&
                  //     errors.description
                  // )}
                  // helperText={errors.description}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  disabled={isSubmitting}
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
