import { React, useEffect, useState } from "react";
import { getUserInfo } from "../../redux/actions/userActions";
import { postOrder } from "../../redux/actions/bookingActions";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import "../Booking/booking.css";
import Footer from "../Footer/Footer";
import { Form, Formik } from "formik";
import Button from "../FormUI/Button/index";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import {
  Container,
  Divider,
  Grid,
  Typography,
  TextField,
} from "@mui/material";
import Select from "../FormUI/Select/index";
import Textfield from "../FormUI/Textfield/index";
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
  arrivealDate: new Date(),
  departureDate: new Date(),
};

const form_validation = Yup.object().shape({
  type: Yup.string().required("Required"),
  message: Yup.string(),
  arrivealDate: Yup.date().required("Required"), //ver que tipo de dato le paso para que valide el de datepicker
  departureDate: Yup.date().required("Required"),
});

const Booking = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const options = ["Reciprocal", "Pay with points"];

  const announInfo = useSelector((state) => state.postReducer.homeInfo);
  //console.log(announInfo.id, "trayendo mi id de anuncio");
  const [value, setValue] = useState(announInfo.arrivealDate);
  const [value2, setValue2] = useState(value);
  const token = window.localStorage.getItem("user");

  const handleOnSubmit = (values) => {
    values.userId = id;
    values.announcementId = announInfo.id;
    values.arrivealDate = value;
    values.departureDate = value2;
    //console.log(values);
    dispatch(postOrder(values));
    history.push("/my-bookings");
  };

  useEffect(() => {
    dispatch(getUserInfo());
    announInfo.id && dispatch(getHouseID(announInfo.id));
  }, []);

  const { id } = useSelector((state) => state.userReducer.details);

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
        <Divider className={classes.divider}></Divider>
        <div className="form_booking_container">
          <Formik
            initialValues={initial_form_states}
            validationSchema={form_validation}
            onSubmit={handleOnSubmit}
          >
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
                      name="arrivealDate"
                      label="Arrival Date"
                      value={value}
                      minDate={new Date(announInfo.arrivealDate)} 
                      maxDate={new Date(announInfo.departureDate)}                                           
                      onChange={(newValue) => {
                        setValue(newValue);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </Grid>

                <Grid item xs={6}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      name="departureDate"
                      label="Departure Date"
                      value={value2}                      
                      minDate={new Date(value)}
                      maxDate={new Date(announInfo.departureDate)}
                      onChange={(newValue) => {
                        setValue2(newValue);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
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
