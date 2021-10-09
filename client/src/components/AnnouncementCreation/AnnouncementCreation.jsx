import React from "react";
import { useDispatch, useSelector} from "react-redux";
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
import Checkbox from "@mui/material/Checkbox";
import { postAnnouncements } from "../../redux/actions/postActions";



const AnnouncementCreation = () => {

  const user= useSelector((state) => state.userReducer.userInfo);

  const initialValues = {
    id: user.id,
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
  };

  const dispatch = useDispatch();
  

  const onSubmit = ( values) => {
    console.log(  values)
    dispatch(postAnnouncements(values));
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
  });


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
              <TextField
                id="image"
                name="image"
                type="file"
                onChange={formik.handleChange}
                value={formik.values.image}
                fullWidth
              />
              <FormControl component="fieldset">

                <FormLabel component="legend" />
                <RadioGroup
                  row
                  aria-label="type"
                  defaultValue="house"
                  name="row-radio-buttons-group"
                  value={formik.values.type}
                  onChange={formik.handleChange}
                >
                  <FormControlLabel
                    value="house"
                    control={<Radio />}
                    label="House"
                  />
                  <FormControlLabel
                    value="apartment"
                    control={<Radio />}
                    label="Apartment"
                  />
                </RadioGroup>
              
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
