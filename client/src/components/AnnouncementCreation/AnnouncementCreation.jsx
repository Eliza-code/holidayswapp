import React from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Header from "../Header/Header";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { postAnnouncements } from "../../redux/actions/postActions";

const initialValues = {
  title: "",
  owner: "",
  description: "",
  country: "",
  state: "",
  city: "",
  type: "",
  points: "",
  sleeps: "",
  bedrooms: "",
  beds: "",
  bathrooms: "",
  surfaceM2: "",
  smokersWelcome: "",
  petsWelcome: "",
  childremWelcome: "",
  wifi: "",
  tv: "",
  washing_machine: "",
  fridge: "",
  a_c: "",
  private_parking: "",
  image: [],
  rating: "",
};

const AnnouncementCreation = () => {
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    dispatch(postAnnouncements({
      title: values.title.trim(),
      owner: values.owner.trim(),
      description: values.description.trim(),
      country: values.country.trim(),
      state: values.state.trim(),
      city: values.city.trim(),
      type: values.type.trim(),
      points: values.points.trim(),
      sleeps: values.sleeps.trim(),
      bedrooms: values.bedrooms.trim(),
      beds: values.beds.trim(),
      bathrooms: values.title.trim(),
      surfaceM2: values.title.trim(),
      smokersWelcome: values.title.trim(),
      petsWelcome: values.title.trim(),
      childremWelcome: values.title.trim(),
      wifi: values.title.trim(),
      tv: values.title.trim(),
      washing_machine: values.title.trim(),
      fridge: values.title.trim(),
      a_c: values.title.trim(),
      private_parking: values.title.trim(),
      image: values.title.trim(),
      rating: values.title.trim(),
    }));
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
  })
  console.log(formik.values)
  
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Container sx={{ marginBottom: 10 }} maxWidth="sm">
          <CssBaseline />
          <Paper elevation={3}>
            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                "& .MuiTextField-root": { m: 2, width: "17rem" },
              }}
              onSubmit={formik.handleSubmit}
              autoComplete="off"
            >
              <Typography
                sx={{ marginTop: 5 }}
                align="center"
                variant="h4"
                gutterBottom
              >
                Post your Amazing Home
              </Typography>
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
              <TextField
                required
                id="owner"
                name="owner"
                label="Owner"
                type="text"
                placeholder="Owner"
                onChange={formik.handleChange}
                value={formik.values.owner}
                fullWidth
              />
              <TextField
                required
                id="description"
                name="description"
                label="Description"
                type="text"
                placeholder="Description"
                onChange={formik.handleChange}
                value={formik.values.description}
                fullWidth
              />
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
                required
                id="state"
                name="state"
                label="State"
                type="text"
                placeholder="State"
                onChange={formik.handleChange}
                value={formik.values.state}
                fullWidth
              />
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
              <FormControl component="fieldset">
                <FormLabel component="legend">Type of Home</FormLabel>
                <RadioGroup
                  aria-label="type of home"
                  defaultValue="house"
                  name="row-radio-buttons-group"
                  onChange={formik.handleChange}
                >
                  <FormControlLabel
                    value="house"
                    control={<Radio />}
                    label="Houses"
                  />
                  <FormControlLabel
                    value="apartment"
                    control={<Radio />}
                    label="Apartment"
                  />
                </RadioGroup>
              </FormControl>
              <TextField
                required
                id="points"
                name="points"
                label="Points"
                type="text"
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
              <TextField
                required
                id="image"
                name="image"
                
                type="file"
                onChange={formik.handleChange}
                value={formik.values.image}
                fullWidth
              />
              <FormControl component="fieldset">
              <FormLabel component="legend">Private Parking</FormLabel>
                <RadioGroup
                  aria-label="private_parking"
                  defaultValue="Yes"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value= {true}
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel
                    value={false}
                    control={<Radio />}
                    label="No"
                  />
                </RadioGroup>

                <FormLabel component="legend">Smokers Allow</FormLabel>
                <RadioGroup
                  aria-label="smokersWelcome"
                  defaultValue="Yes"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel
                    value="No"
                    control={<Radio />}
                    label="No"
                  />
                </RadioGroup>
             
                <FormLabel component="legend">Pets Allow</FormLabel>
                <RadioGroup
                  aria-label="petsWelcome"
                  defaultValue="Yes"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel
                    value="No"
                    control={<Radio />}
                    label="No"
                  />
                </RadioGroup>
           
                <FormLabel component="legend">Children Allow</FormLabel>
                <RadioGroup
                  aria-label="childremWelcome"
                  defaultValue="Yes"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel
                    value="No"
                    control={<Radio />}
                    label="No"
                  />
                </RadioGroup>
             
                <FormLabel component="legend">Wifi</FormLabel>
                <RadioGroup
                  aria-label="wifi"
                  defaultValue="Yes"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel
                    value="No"
                    control={<Radio />}
                    label="No"
                  />
                </RadioGroup>
             
                <FormLabel component="legend">Tv</FormLabel>
                <RadioGroup
                  aria-label="tv"
                  defaultValue="Yes"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel
                    value="No"
                    control={<Radio />}
                    label="No"
                  />
                </RadioGroup>

                <FormLabel component="legend">Washing Machine</FormLabel>
                <RadioGroup
                  aria-label="washing_machine"
                  defaultValue="Yes"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel
                    value="No"
                    control={<Radio />}
                    label="No"
                  />
                </RadioGroup>

                <FormLabel component="legend">Fridge</FormLabel>
                <RadioGroup
                  aria-label="fridge"
                  defaultValue="Yes"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel
                    value="No"
                    control={<Radio />}
                    label="No"
                  />
                </RadioGroup>

                <FormLabel component="legend">AC</FormLabel>
                <RadioGroup
                  aria-label="a_c"
                  defaultValue="Yes"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel
                    value="No"
                    control={<Radio />}
                    label="No"
                  />
                </RadioGroup>                
              </FormControl>
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
          </Paper>
        </Container>
      </div>
    </div>
  );
};

export default AnnouncementCreation;
