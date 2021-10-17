import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Header from "../Header/Header";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Checkbox from "@mui/material/Checkbox";
import { postAnnouncements } from "../../redux/actions/postActions";
import { getUserInfo } from "../../redux/actions/userActions";
import NavBar from "../NavBar/NavBar";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

const AnnouncementCreation = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.details);
  const [value, setValue] = useState(new Date());
  const [value2, setValue2] = useState(value);

  React.useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);

  const initialValues = {
    title: "",
    description: "",
    country: "",
    state: "",
    city: "",
    adress: "",
    type: "",
    points: "",
    sleeps: "",
    bedrooms: "",
    beds: "",
    bathrooms: "",
    surfaceM2: "",
    smokersWelcome: false,
    petsWelcome: false,
    childremWelcome: false,
    wifi: false,
    tv: false,
    washing_machine: false,
    fridge: false,
    a_c: false,
    private_parking: false,
    image: [],
    rating: "",
    arrivealDate: undefined,
    departureDate: undefined,
  };

  const onSubmit = (values) => {
    const inputs = {
      ...values,
      owner_id: user.id,
      owner: user.username,
      arrivealDate: value,
      departureDate: value2,
    };

    dispatch(postAnnouncements(inputs));
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <div>
      <div className="headerNav">
        <Header />
        <NavBar />
      </div>
      <div>
        <Container sx={{ marginBottom: 10 }} maxWidth="lg">
          <Paper elevation={3}>
            <Typography
              sx={{ marginTop: 5 }}
              align="center"
              variant="h4"
              gutterBottom
            >
              Post your Amazing Home
            </Typography>
            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                "& .MuiTextField-root": { m: 2 },
              }}
              onSubmit={formik.handleSubmit}
              autoComplete="off"
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "60%",
                }}
              >
                <TextField
                  required
                  id="title"
                  name="title"
                  label="Title"
                  type="text"
                  placeholder="Title"
                  onChange={formik.handleChange}
                  value={formik.values.title}
                  fullWidth
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "60%",
                }}
              >
                <TextField
                  multiline
                  id="description"
                  name="description"
                  label="Description"
                  type="text"
                  placeholder="Description"
                  onChange={formik.handleChange}
                  value={formik.values.description}
                  fullWidth
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "60%",
                }}
              >
                <TextField
                  required
                  id="country"
                  name="country"
                  label="Country"
                  type="text"
                  placeholder="Country"
                  onChange={formik.handleChange}
                  value={formik.values.country}
                  fullWidth
                />
                <TextField
                  id="state"
                  name="state"
                  label="State"
                  type="text"
                  placeholder="State"
                  onChange={formik.handleChange}
                  value={formik.values.state}
                  fullWidth
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "60%",
                }}
              >
                <TextField
                  required
                  id="city"
                  name="city"
                  label="City"
                  type="text"
                  placeholder="city"
                  onChange={formik.handleChange}
                  value={formik.values.city}
                  fullWidth
                />
                <TextField
                  required
                  id="adress"
                  name="adress"
                  label="Address"
                  type="text"
                  placeholder="adress"
                  onChange={formik.handleChange}
                  value={formik.values.adress}
                  fullWidth
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "60%",
                }}
              >
                <TextField
                  required
                  id="points"
                  name="points"
                  label="Points"
                  type="number"
                  placeholder="Value in Points"
                  onChange={formik.handleChange}
                  value={formik.values.points}
                  fullWidth
                />
                <TextField
                  required
                  id="sleeps"
                  name="sleeps"
                  label="Sleeps"
                  type="number"
                  onChange={formik.handleChange}
                  value={formik.values.sleeps}
                  fullWidth
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "60%",
                }}
              >
                <TextField
                  required
                  id="bedrooms"
                  name="bedrooms"
                  label="Bedrooms"
                  type="number"
                  onChange={formik.handleChange}
                  value={formik.values.bedrooms}
                  fullWidth
                />
                <TextField
                  required
                  id="beds"
                  name="beds"
                  label="Beds"
                  type="number"
                  onChange={formik.handleChange}
                  value={formik.values.beds}
                  fullWidth
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "60%",
                }}
              >
                <TextField
                  required
                  id="bathrooms"
                  name="bathrooms"
                  label="Bathrooms"
                  type="number"
                  onChange={formik.handleChange}
                  value={formik.values.bathrooms}
                  fullWidth
                />

                <TextField
                  required
                  id="surfaceM2"
                  name="surfaceM2"
                  label="Surface-M2"
                  type="number"
                  onChange={formik.handleChange}
                  value={formik.values.surfaceM2}
                  fullWidth
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "60%",
                }}
              >
                <TextField
                  id="image"
                  name="image"
                  type="text"
                  placeholder="Insert image"
                  onChange={(e) =>
                    formik.setFieldValue("image", [
                      ...formik.values.image,
                      e.target.value,
                    ])
                  }
                  fullWidth
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "60%",
                }}
              >
                <FormLabel component="legend" />
                <RadioGroup
                  row
                  aria-label="type"
                  defaultValue="house"
                  name="type"
                  value={formik.values.type}
                  onChange={formik.handleChange}
                >
                  <FormControlLabel
                    value="House"
                    control={<Radio />}
                    label="House"
                  />
                  <FormControlLabel
                    value="Apartment"
                    control={<Radio />}
                    label="Apartment"
                  />
                </RadioGroup>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  width: "60%",
                }}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      name="private_parking"
                      checked={formik.values.private_parking}
                      onChange={formik.handleChange}
                    />
                  }
                  label="Private Parking"
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      name="smokersWelcome"
                      checked={formik.values.smokersWelcome}
                      onChange={formik.handleChange}
                    />
                  }
                  label="Smokers Allow"
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      name="petsWelcome"
                      checked={formik.values.petsWelcome}
                      onChange={formik.handleChange}
                    />
                  }
                  label="Pets Allow"
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      name="childremWelcome"
                      checked={formik.values.childremWelcome}
                      onChange={formik.handleChange}
                    />
                  }
                  label="Children Allow"
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  width: "60%",
                }}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      name="wifi"
                      checked={formik.values.wifi}
                      onChange={formik.handleChange}
                    />
                  }
                  label="Wifi"
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      name="tv"
                      checked={formik.values.tv}
                      onChange={formik.handleChange}
                    />
                  }
                  label="Tv"
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      name="washing_machine"
                      checked={formik.values.washing_machine}
                      onChange={formik.handleChange}
                    />
                  }
                  label="Washing Machine"
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      name="fridge"
                      checked={formik.values.fridge}
                      onChange={formik.handleChange}
                    />
                  }
                  label="Fridge "
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  width: "60%",
                }}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      name="a_c"
                      checked={formik.values.a_c}
                      onChange={formik.handleChange}
                    />
                  }
                  label="AC "
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  width: "60%",
                  alignItems: "center",
                }}
              >
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    name="arrivealDate"
                    label="Arrival Date"
                    value={value}
                    minDate={new Date()}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    name="departureDate"
                    label="Departure Date"
                    value={value2}
                    minDate={value}
                    onChange={(newValue) => {
                      setValue2(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Box>

              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                  sx={{
                    marginTop: 5,
                    marginBottom: 10,
                    width: "17rem",
                    height: "3rem",
                  }}
                  type="submit"
                  variant="contained"
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </Paper>
        </Container>
      </div>
    </div>
  );
};

export default AnnouncementCreation;
