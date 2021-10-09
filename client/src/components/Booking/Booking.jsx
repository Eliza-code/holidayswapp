import React from "react";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import "../Booking/booking.css";
import Footer from "../Footer/Footer";
import { Field, Form, Formik } from "formik";
import Button from "../FormUI/Button/index";
import { Chip, Container, Divider, Grid, Typography } from "@mui/material";
import Select from "../FormUI/Select/index";
import Textfield from "../FormUI/Textfield/index";
import DateTimePicker from "../FormUI/DataTimePicker/index";
import * as Yup from "yup";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: "20px",
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    textAlign: "center",
    fontSize: "3em",
  },
  divider: {
    marginBottom: "30px",
  },
}));

const initial_form_states = {
  type: "",
  message: "",
  arrivealDate: "",
  departureDate: "",
};

const form_validation = Yup.object().shape({
  type:Yup.string()
    .required('Required'),
  message: Yup.string(),
  arrivealDate: Yup.date()
    .required('Required'),
  departureDate: Yup.date()
    .required('Required'),
  });
  

const Booking = () => {
  const classes = useStyles();
  const options = ["Reciprocal", "Pay with points"];
  return (
    <div>
      <div className="headerNav">
        <Header />
        <NavBar />
      </div>
      <Container sx={{ width: 1 / 2 }}>
        <Grid item xs={12}>
          <Typography className={classes.title}>Booking Form</Typography>
        </Grid>
        <Divider className={classes.divider}>
          {/* <Chip label="Booking Form" /> */}
        </Divider>
        <div className="form_booking_container">
          <Formik
            initialValues={initial_form_states}
            validationSchema={form_validation}
            onSubmit={values => {
              console.log(values);
            }}

          >
            {/* {console.log(initialValues.checked)} */}

            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Select name="type" label="Exchange Type" options={options} />
                </Grid>
                <Grid item xs={12}>
                  <Textfield
                    name="message"
                    label="Message"
                    multiline={true}
                    rows={4}
                  />
                </Grid>
                <Grid item xs={6}>
                  <DateTimePicker name="arrivealDate" label="Arrival Date" />
                </Grid>

                <Grid item xs={6}>
                  <DateTimePicker name="departureDate" label="Departure Date" />
                </Grid>

                <Grid item xs={12}>
                  <Button>Submit Form</Button>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </div>
      </Container>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Booking;
