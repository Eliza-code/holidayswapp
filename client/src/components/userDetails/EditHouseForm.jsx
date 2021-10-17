import React from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import HighlightOffTwoToneIcon from '@mui/icons-material/HighlightOffTwoTone';
import Swal from "sweetalert2";
import {  updateHouseForm } from "../../redux/actions/userActions";
import axios from 'axios';

const AnnouncementUpdate = ({ house, handleOpen, handleClose }) => {
  const dispatch = useDispatch()

  const [images, setImages] = React.useState(house.image);
  

  const initialValues = {...house}

  const handleUpload = async (e) => {
    try{
      const files = e.target.files;
      const data = new FormData();
      for (let img of files) {
        data.append('file', img);
        data.append('upload_preset', 'holidayswapp');
        const response = await axios.post("https://api.cloudinary.com/v1_1/dpqihpvhd/image/upload", data)
        setImages([...images, response.data.secure_url])
        
      }
    } catch (err) {
      console.log(err);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Upload failed. Please, try again",
      });
    }
  }
  const handleDeleteImg = (elem) => {
    setImages( images.filter( img => img !== elem))
  }

  const onSubmit = (values) => {
    const input = { ...values, image: images }
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(updateHouseForm(house.id, input));
          Swal.fire(
              'Your home has been updated!',
              'success'
          ).then(() => handleOpen(false))
      }
    })
    
  };
  

  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  
  return (
    <div>
      <div>
        <Container sx={{ marginBottom: 10 }} maxWidth="md">
          <CssBaseline />
          <Paper elevation={3}>
            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                "& .MuiTextField-root": { m: 2, width: "25rem" },
              }}
              onSubmit={formik.handleSubmit}
              autoComplete="off"
            >
              <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
              >
                <Button
               
                  sx={{ height: "2rem", width:"2rem", margin: 4}}
                  variant="contained"
                  onClick={handleClose}
                >
                  X
                </Button>
                <Typography
                  // sx={{ marginTop: 4 }}
                  align="center"
                  variant="h4"
                  gutterBottom
                >
                  Edit your home
                </Typography>
                
              </Box>
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
                id="adress"
                name="adress"
                label="Address"
                type="text"
                placeholder="adress"
                onChange={formik.handleChange}
                value={formik.values.adress}
                fullWidth
              />
              
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
              <input
                id="image"
                name="image"
                type="file"
                multiple
                accept='image/*'
                placeholder="Insert image"
                onChange={(e) => handleUpload(e)}
              />
              <Paper sx={{ display: 'flex', flexWrap:'wrap' , alignContent:'center', p:3, gap:2}} variant='outlined'>
                {images?.map( (elem, i)  => (
                  <div key={i}>
                    <IconButton
                          style={{ position: "absolute", margin: 1, borderRadius: 10 }}
                          onClick={() => handleDeleteImg(elem)}>
                            <HighlightOffTwoToneIcon color="primary" />
                        </IconButton>
                    <img  src={elem} alt="Not found" style={{ width: 100, height: 100, borderRadius: 4 }}/>
                  </div>
                ))}
              </Paper>
              <FormControl component="fieldset">
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
              <TextField
                  id="arrivealDate"
                  type="date"
                  label = "Arrival Date"
                  name="arrivealDate"
                  inputProps={{
                    min:  "2021-10-14"
                  }}
                  onChange={formik.handleChange}
                  value={formik.values.arrivealDate}
                  InputLabelProps={{ shrink: true }}
                />
                 <TextField
                  id="departureDate"
                  type="date"
                  inputProps={{
                    min:  "2021-10-14"
                  }}
                  label = "Departure Date"
                  name="departureDate"
                  onChange={formik.handleChange}
                  value={formik.values.departureDate}
                  InputLabelProps={{ shrink: true }}
                />
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
                SAVE CHANGES
              </Button>
            </Box>
          </Paper>
        </Container>
      </div>
    </div>
  );
};

export default AnnouncementUpdate;
