import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { profileForm as validate } from "./validate";
import { nationalities, languagesSpoken } from "../SignUp/validate";
import { useDispatch } from "react-redux";
import { updateUserProfile } from "../../redux/actions/userActions";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Swal from "sweetalert2";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import CircularProgress from "@mui/material/CircularProgress";
import Avatar from "@mui/material/Avatar";

const EditProfileForm = ({ user, handleClose }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);
  const [image, setImage] = React.useState(user.profilePicture);

  const initialValues = { ...user };

  const handleUpload = async (e) => {
    try {
      const files = e.target.files;
      const data = new FormData();
      data.append("file", files[0]);
      data.append("upload_preset", "holidayswapp");
      setLoading(true);
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dpqihpvhd/image/upload",
        data
      );
      setImage(response.data.secure_url);
      setLoading(false);
    } catch (e) {
      console.error(e);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Upload failed. Please, try again",
      });
    }
  };

  const onSubmit = (values) => {
    const inputs = {
      ...values,
      profilePicture: image,
    };
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(updateUserProfile(user.id, inputs));
        Swal.fire("Your profile has been updated!").then(() => handleClose());
      }
    });
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <Container sx={{ marginBottom: 10 }} maxWidth="md">
      <Paper elevation={3}>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            "& .MuiTextField-root": { m: 2, width: "25rem" },
          }}
          autoComplete="off"
          onSubmit={formik.handleSubmit}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <Button
              sx={{ height: "2rem", width: "2rem", margin: 4 }}
              variant="contained"
              onClick={handleClose}
            >
              X
            </Button>
            <Typography
              sx={{ marginTop: 5 }}
              align="center"
              variant="h4"
              gutterBottom
            >
              Edit your profile
            </Typography>
          </Box>
          <div>
            <TextField
              required
              id="username"
              label="Username"
              type="text"
              name="username"
              placeholder="Ej: cori47"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={Boolean(formik.touched.username && formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
            />
          </div>

          <div>
            {loading ? (
              <CircularProgress />
            ) : (
              <Avatar src={image} sx={{ width: "5rem", height: "5rem" }} />
            )}
            <TextField
              id="profilePicture"
              placeholder="Upload an image"
              type="file"
              name="profilePicture"
              onChange={(e) => handleUpload(e)}
              // value={image}
              // onBlur={formik.handleBlur}
              // helperText={formik.errors.profilePicture}
            />
          </div>

          <div>
            <TextField
              required
              error={Boolean(formik.touched.name && formik.errors.name)}
              id="name"
              label="Name"
              placeholder="Name"
              type="text"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              onBlur={formik.handleBlur}
              helperText={formik.errors.name}
              InputLabelProps={{ shrink: true }}
            />
          </div>

          <div>
            <TextField
              required
              error={Boolean(formik.touched.lastName && formik.errors.lastName)}
              id="lastName"
              label="Lastname"
              placeholder="Lastname"
              type="text"
              name="lastName"
              onChange={formik.handleChange}
              value={formik.values.lastName}
              onBlur={formik.handleBlur}
              helperText={formik.errors.lastName}
              InputLabelProps={{ shrink: true }}
            />
          </div>

          <div>
            <TextField
              required
              error={Boolean(formik.touched.email && formik.errors.email)}
              id="email"
              name="email"
              label="Email"
              placeholder="a.2@dev.com"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
              helperText={formik.touched.email && formik.errors.email}
              InputLabelProps={{ shrink: true }}
            />
          </div>

          <div>
            <TextField
              error={Boolean(
                formik.touched.phoneNumber && formik.errors.phoneNumber
              )}
              id="phoneNumber"
              label="Phone number"
              placeholder="Phone number"
              type="text"
              name="phoneNumber"
              onChange={formik.handleChange}
              value={formik.values.phoneNumber}
              onBlur={formik.handleBlur}
              helperText={
                formik.touched.phoneNumber && formik.errors.phoneNumber
              }
              InputLabelProps={{ shrink: true }}
            />
          </div>

          <div>
            <TextField
              id="dateOfBirth"
              type="date"
              label="Date of Birth"
              name="dateOfBirth"
              onChange={formik.handleChange}
              value={formik.values.dateOfBirth}
              onBlur={formik.handleBlur}
              InputLabelProps={{ shrink: true }}
            />
          </div>

          <div>
            <TextField
              multiline
              id="description"
              type="text"
              label="Description"
              name="description"
              onChange={formik.handleChange}
              value={formik.values.description}
              onBlur={formik.handleBlur}
            />
          </div>
          <div>
            <Autocomplete
              id="nacionality"
              name="nacionality"
              label="Nacionality"
              options={nationalities}
              defaultValue={user.nacionality}
              value={formik.values.nacionality}
              onChange={(e, value) =>
                formik.setFieldValue("nacionality", value)
              }
              renderOption={(props, option) => (
                <Box component="li" {...props}>
                  {option}
                </Box>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  required
                  label="Choose a nationality"
                  name="nacionality"
                  margin="normal"
                />
              )}
            />

            <Autocomplete
              multiple
              id="languagesSpoken"
              options={languagesSpoken}
              name="languagesSpoken"
              label="Choose a language"
              defaultValue={user.languagesSpoken}
              value={formik.values.languagesSpoken}
              getOptionLabel={(option) => option}
              onChange={(e, values) =>
                formik.setFieldValue("languagesSpoken", values)
              }
              filterSelectedOptions
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  name="languagesSpoken"
                  placeholder="Choose a language"
                />
              )}
            />
          </div>
          <Button
            sx={{ mt: 5, mb: 10, width: "17rem", height: "3rem" }}
            type="submit"
            variant="contained"
          >
            SAVE CHANGES
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default EditProfileForm;
