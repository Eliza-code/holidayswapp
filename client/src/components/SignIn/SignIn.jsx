import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import "./Signin.css";
import { postSignIn } from "../../redux/actions/userActions";
import Header from "../Header/Header";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { validate } from '../SignUp/validate';


const initialValues = {
  username: "",
  password: "",
  showPassword: false
};

const SignIn = () => {
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    console.log('works!')
    console.log(values.username)
    dispatch(postSignIn({ username: values.username,
      password: values.password}))
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <div className="singup">
      <div className="singinContainer">
        <Header />
      </div>
      <div className="formcontainer">
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
              autoComplete="off"
              onSubmit={onSubmit}
            >
            <div>
              <Typography
                sx={{ marginTop: 5 }}
                align="center"
                variant="h4"
                gutterBottom
              >
                Sign In
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
              <FormControl sx={{ m: 2, width: "17rem" }}>
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
                  // helperText={formik.touched.password && formik.errors.password}
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
              </FormControl>
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
              Sign In
            </Button>
          </Box>
        </Paper>
      </Container>
      </div>
    </div>
  );
};

export default SignIn;
