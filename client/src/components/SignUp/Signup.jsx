import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import CircularProgress from "@mui/material/CircularProgress";

import { nationalities, validate, languagesSpoken } from "./validate";
import { postUser } from "../../redux/actions/userActions";
import Header from "../Header/Header";
import "./Signup.css";

const Signup = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);
  const [image, setImage] = React.useState("");

  const initialValues = {
    username: "",
    password: "",
    confirmpassword: "",
    name: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    dateOfBirth: "",
    description: "",
    nacionality: "",
    languagesSpoken: [],
    showPassword: false,
    showConfirmPassword: false,
  };

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
      const file = response.data;
      setImage(file.secure_url);
      setLoading(false);
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Upload failed. Please, try again",
      });
    }
  };

  const onSubmit = (values) => {
    const { showPassword, showConfirmPassword, ...input } = values;
    if (!input.dateOfBirth) {
      Swal.fire("Must contain your date of birth");
    } else if (!image) {
      Swal.fire("Must upload a proifle picture");
    } else {
      dispatch(
        postUser({
          ...input,
          username: input.username.trim(),
          password: input.password.trim(),
          name: input.name.trim(),
          lastName: input.lastName.trim(),
          email: input.email.trim(),
          phoneNumber: parseInt(input.phoneNumber),
          profilePicture: image,
        })
      );
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <div className="singup">
      <div className="singupContainer">
        <Header />
      </div>
      <div className="formcontainer">
        <Container sx={{ marginBottom: 10 }} maxWidth="lg">
          <Paper elevation={3}>
            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                "& .MuiTextField-root": { m: 2, width: "17rem" },
                "& .MuiFormControl-root": { m: 2, width: "17rem" },
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
                  Create your profile
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
                />
              </div>

              <div>
                <FormControl>
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <OutlinedInput
                    required
                    error={Boolean(
                      formik.touched.password && formik.errors.password
                    )}
                    id="password"
                    label="Password"
                    placeholder="Password"
                    type={formik.values.showPassword ? "text" : "password"}
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={(e) =>
                            formik.setFieldValue(
                              "showPassword",
                              !formik.values.showPassword
                            )
                          }
                          onMouseDown={(e) => e.preventDefault()}
                          edge="end"
                        >
                          {formik.values.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  {formik.touched.password && formik.errors.password && (
                    <FormHelperText>{formik.errors.password}</FormHelperText>
                  )}
                </FormControl>

                <FormControl>
                  <InputLabel htmlFor="confirmpassword">
                    Confirm password
                  </InputLabel>
                  <OutlinedInput
                    required
                    error={Boolean(
                      formik.touched.confirmpassword &&
                        formik.errors.confirmpassword
                    )}
                    id="confirmpassword"
                    label="Confirm password"
                    placeholder="Password"
                    type={
                      formik.values.showConfirmPassword ? "text" : "password"
                    }
                    name="confirmpassword"
                    onChange={formik.handleChange}
                    value={formik.values.confirmpassword}
                    onBlur={formik.handleBlur}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          disabled={formik.values.password === ""}
                          onClick={(e) =>
                            formik.setFieldValue(
                              "showConfirmPassword",
                              !formik.values.showConfirmPassword
                            )
                          }
                          onMouseDown={(e) => e.preventDefault()}
                          edge="end"
                        >
                          {formik.values.showConfirmPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    disabled={formik.values.password === ""}
                  />
                  {formik.touched.confirmpassword &&
                    formik.errors.confirmpassword && (
                      <FormHelperText>
                        {formik.errors.confirmpassword}
                      </FormHelperText>
                    )}
                </FormControl>
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
                />

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
                />

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
                  onChange={(event, values) =>
                    formik.setFieldValue("languagesSpoken", values)
                  }
                  filterSelectedOptions
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Choose a language"
                      name="languagesSpoken"
                      placeholder="Choose a language"
                    />
                  )}
                />
              </div>

              <div style={{ display: "flex", alignItems: "center", margin: 4 }}>
                <div>
                  {loading ? (
                    <CircularProgress />
                  ) : (
                    <Avatar
                      src={image}
                      sx={{ width: "5rem", height: "5rem" }}
                    />
                  )}
                </div>
                <div>
                  <TextField
                    id="profilePicture"
                    placeholder="Upload an image"
                    type="file"
                    name="profilePicture"
                    onChange={(e) => handleUpload(e)}
                  />
                </div>
              </div>
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
                Sign Up
              </Button>
            </Box>
          </Paper>
        </Container>
      </div>
    </div>
  );
};

export default Signup;
