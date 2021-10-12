import React from "react";
import { Formik } from "formik";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";

const initialValues = {
  stars: 0,
  description: "",
};

const validate = (values) => {
  const errors = {};

  if (!values.description) {
    errors.description = "Required";
  } else if (values.description.length < 20) {
    errors.description = "Must contain more than 20 characters";
  }

  return errors;
};

const ReviewForm = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Grid
      container
      justifyContent="center"
      component="main"
      sx={{ height: "50vh" }}
    >
      <Grid item component={Paper} xs={12} sm={8} md={5} elevation={4}>
        <Box
          sx={{
            my: 10,
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
              handleBlur,
              touched,
              errors,
              isSubmitting,
            }) => (
              <Box component="form" onSubmit={handleSubmit}>
                <Rating
                  name="stars"
                  value={values.stars}
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
                  handleBlur={handleBlur}
                  errors={Boolean(
                    errors.description &&
                      touched.description &&
                      errors.description
                  )}
                  helperText={errors.description}
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
