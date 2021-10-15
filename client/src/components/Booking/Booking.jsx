import { React, useEffect, useState } from "react";
import { getUserInfo } from "../../redux/actions/userActions";
import { postOrder } from "../../redux/actions/bookingActions";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import "../Booking/booking.css";
import Footer from "../Footer/Footer";
import { Field, Form, Formik } from "formik";
import Button from "../FormUI/Button/index";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { Chip, Container, Divider, Grid, Typography, TextField } from "@mui/material";
import Select from "../FormUI/Select/index";
import Textfield from "../FormUI/Textfield/index";
// import DateTimePicker from "../FormUI/DataTimePicker/index";
import * as Yup from "yup";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getHouseID } from "../../redux/actions/postActions";

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
  userId: "",
  type: "",
  description: "",
  status: "Pending",
  arrivealDate: "",
  departureDate: "",
};

const form_validation = Yup.object().shape({
  type: Yup.string().required("Required"),
  message: Yup.string(),
  arrivealDate: Yup.date().required("Required"),
  departureDate: Yup.date().required("Required"),
});

const Booking = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const options = ["Reciprocal", "Pay with points"];
  
  const announInfo = useSelector((state) => state.postReducer.homeInfo);
  console.log(announInfo.id, "trayendo mi id de anuncio");
  const [value, setValue] = useState(new Date());
  const [value2, setValue2] = useState(value);
  const token = window.localStorage.getItem("user");

  console.log(announInfo.arrivealDate);
  console.log(announInfo.departureDate);

  const handleOnSubmit = (values) => {
    values.userId = id;
    values.announcementId = announInfo.id;
    console.log(values);
    dispatch(postOrder(values));
    history.push("/my-bookings");
  };

  useEffect(() => {
    dispatch(getUserInfo());
    announInfo.id && dispatch(getHouseID(announInfo.id))
  }, []);

  const { id } = useSelector((state) => state.userReducer.details);
  console.log(value)
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
            onSubmit={handleOnSubmit}
          >
            {/* {console.log(initialValues.checked)} */}

            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Select name="type" label="Exchange Type" options={options} />
                </Grid>
                <Grid item xs={12}>
                  <Textfield
                    name="description"
                    label="Message"
                    multiline={true}
                    rows={4}
                  />
                </Grid>
                <Grid item xs={6}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      label="Arrival Date"
                      value={value}
                      minDate= {new Date()}
                      onChange={(newValue) => {
                        setValue(newValue);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                  {/* <DateTimePicker name="arrivealDate" label="Arrival Date" /> */}
                </Grid>

                <Grid item xs={6}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      label="Departure Date"
                      value={value2}  
                      minDate= {value}                    
                      onChange={(newValue) => {
                        setValue2(newValue);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                  {/* <DateTimePicker name="departureDate" label="Departure Date"/> */}
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
