import React from "react";
import { useFormik } from "formik";
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

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
}


const EditProfileForm = ({ user, handleOpen }) => {
    const dispatch = useDispatch();

    const initialValues = {
      username: user.username,
      profilePicture: user.profilePicture,
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      dateOfBirth: user.dateOfBirth,
      description: user.description,
      nacionality: user.nacionality,
      languagesSpoken: user.languagesSpoken,
    };

    const onSubmit = (values) => {
      console.log(values)
      Swal.fire({
        title: 'Are you sure?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            dispatch(updateUserProfile(user.id, values))
            Swal.fire(
                'Your profile has been updated!',
                'success'
            ).then(() => handleOpen(false))
        }
      })

    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate,
    });

    return (
        <Box style={style}>
            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                bgcolor: "white",
                "& .MuiTextField-root": { m: 2, width: "17rem" },
              }}
              autoComplete="off"
              onSubmit={formik.handleSubmit}
            >
              <div>
                <Typography
                  sx={{ marginTop: 5 }}
                  align="center"
                  variant="h4"
                  gutterBottom
                >
                  Edit your profile
                </Typography>
              </div>
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
                  error={Boolean(
                    formik.touched.username && formik.errors.username
                  )}
                  helperText={formik.touched.username && formik.errors.username}
                />
              </div>

              <div>
                <TextField
                  id="profilePicture"
                  placeholder="url"
                  type="text"
                  name="profilePicture"
                  onChange={formik.handleChange}
                  value={formik.values.profilePicture}
                  onBlur={formik.handleBlur}
                  helperText={formik.errors.profilePicture}
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
                  error={Boolean(
                    formik.touched.lastName && formik.errors.lastName
                  )}
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
                  label = "Description"
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
                  label= "Nacionality"
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
                  onChange={(e, values) => formik.setFieldValue("languagesSpoken", values)}
                  filterSelectedOptions
                  renderInput={(params) => (
                    <TextField {...params} variant="outlined" name="languagesSpoken" placeholder="Choose a language" />
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
        </Box>
    )
}

export default EditProfileForm;