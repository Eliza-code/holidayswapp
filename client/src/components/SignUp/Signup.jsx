import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import Autocomplete from "@mui/material/Autocomplete";
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
import "./Signup.css";
import { nationalities, validate, languagesSpoken } from "./validate";
import { postUser } from "../../redux/actions/userActions";
import Header from '../Header/Header';

const initialValues = {
  username: "",
  password: "",
  confirmpassword: "",
  profilePicture: "",
  name: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  dateOfBirth: "",
  nacionality: "",
  languagesSpoken: "",
  showPassword: false,
  showConfirmPassword: false,
};

const Signup = () => {
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    dispatch(
      postUser({
        username: values.username.trim(),
        password: values.password.trim(),
        profilePicture: values.profilePicture,
        name: values.name.trim(),
        lastName: values.lastName.trim(),
        email: values.email,
        phoneNumber: parseInt(values.phoneNumber),
        dateOfBirth: values.dateOfBirth,
        nacionality: values.nacionality,
        languagesSpoken: values.languagesSpoken,
      })
    );
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <div className='singup'>
    <div className='singupContainer'>
      <Header/>
    </div>
    <div className='formcontainer'>
    <Container sx={{  marginBottom: 10 }} maxWidth="sm">
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
              error={Boolean(formik.touched.username && formik.errors.username)}
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

          <div>
            <FormControl sx={{ m: 2, width: "17rem" }}>
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
                type={formik.values.showConfirmPassword ? "text" : "password"}
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
                helpertext={
                  formik.touched.confirmpassword &&
                  formik.errors.confirmpassword
                }
                disabled={formik.values.password === ""}
              />
            </FormControl>
          </div>

          <div>
            <TextField
              id="profilePicture"
              placeholder=".jpg"
              type="file"
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
            />
          </div>

          <div>
            <TextField
              required
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
              name="dateOfBirth"
              onChange={formik.handleChange}
              value={formik.values.dateOfBirth}
              onBlur={formik.handleBlur}
            />
          </div>

          <div>
            <Autocomplete
              id="nacionality"
              name="nacionality"
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
              id="languagesSpoken"
              name="languagesSpoken"
              options={languagesSpoken}
              onChange={(e, value) =>
                formik.setFieldValue("languagesSpoken", value)
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
                  label="Choose a language"
                  name="languagesSpoken"
                  margin="normal"
                />
              )}
            />
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


// import React from 'react';
// import { useFormik } from 'formik';
// import { useDispatch } from 'react-redux';
// import Autocomplete from "@mui/material/Autocomplete"
// import TextField from "@mui/material/TextField"
// import Box from "@mui/material/Box"
// import './Signup.css';
// import * as Yup from 'yup';
// import { nationalities, validate, languagesSpoken } from "./validate"
// import { postUser } from "../../redux/actions/userActions";

// const initialValues = {
//     username:'',
//     password:'',
//     confirmpassword: '',
//     profilePicture:'',
//     name:'',
//     lastName:'',
//     email:'',
//     phoneNumber:'',
//     dateOfBirth:'',
//     nacionality:'',
//     languagesSpoken:'',
// }

// const Signup = () => {

//     const dispatch = useDispatch()

//     const onSubmit = (values) => {
//         console.log(values)
//         dispatch(postUser({
//             username: values.username,
//             password: values.password,
//             profilePicture: values.profilePicture,
//             name: values.name,
//             lastName: values.lastName,
//             email: values.email,
//             phoneNumber: values.phoneNumber,
//             dateOfBirth: values.dateOfBirth,
//             nacionality: values.nacionality,
//             languagesSpoken: values.languagesSpoken
//         }));
//     }

//     const formik =  useFormik({
//         initialValues,
//         onSubmit,
//         validate
//     });

//     return ( 
//         <div className="mainForm">
//             <form className="containerForm" onSubmit={formik.handleSubmit}>
//             <h1>Create your Profile</h1>
//                 <div className="formLabel">
//                     <label htmlFor='username'>Username</label>
//                     <input id='username' 
//                     placeholder='Ej: cori47' 
//                     type='text' 
//                     name='username' 
//                     onChange={formik.handleChange} 
//                     value={formik.values.username} 
//                     onBlur={formik.handleBlur}/>
//                     {formik.touched.username && formik.errors.username ? <span>{formik.errors.username}</span> : null}
//                 </div>

//                 <div className="formLabel">
//                     <label htmlFor='password'>Password</label>
//                     <input id='password' 
//                     placeholder='Password' 
//                     type='password' 
//                     name='password' 
//                     onChange={formik.handleChange} 
//                     value={formik.values.password} 
//                     onBlur={formik.handleBlur} />
//                     {formik.touched.password && formik.errors.password ? <span>{formik.errors.password}</span> : null}
//                 </div>

//                 <div className="formLabel">
//                     <label htmlFor='confirmpassword'>Confirm Password</label>
//                     <input id='confirmpassword' 
//                     placeholder='Password' 
//                     type='password' 
//                     name='confirmpassword' 
//                     onChange={formik.handleChange} 
//                     value={formik.values.confirmpassword} 
//                     onBlur={formik.handleBlur} />
//                     {formik.touched.confirmpassword && formik.errors.confirmpassword ? <span>{formik.errors.confirmpassword}</span> : null}
//                 </div>

//                 <div className="formLabel">
//                     <label htmlFor='profilePicture'>Profile Picture</label>
//                     <input id='profilePicture' 
//                     placeholder='.jpg'
//                      type='file' 
//                      name='profilePicture' 
//                      onChange={formik.handleChange} 
//                      value={formik.values.profilePicture}
//                      onBlur={formik.handleBlur}/>
//                     {formik.touched.profilePicture && formik.errors.profilePicture ? <span>{formik.errors.profilePicture}</span> : null}
//                 </div>

//                 <div className="formLabel">
//                     <label htmlFor='name'>Name</label>
//                     <input id='name' 
//                     placeholder='Name' 
//                     type='text' 
//                     name='name' 
//                     onChange={formik.handleChange} 
//                     value={formik.values.name} 
//                     onBlur={formik.handleBlur}/>
//                     {formik.touched.name && formik.errors.name ? <span>{formik.errors.name}</span> : null}
//                 </div>

//                 <div className="formLabel">
//                     <label htmlFor='lastName'>Lastname</label>
//                     <input id='lastName' 
//                     placeholder='Lastname' 
//                     type='text' 
//                     name='lastName' 
//                     onChange={formik.handleChange} 
//                     value={formik.values.lastName} 
//                     onBlur={formik.handleBlur}/>
//                     {formik.touched.lastName && formik.errors.lastName ? <span>{formik.errors.lastName}</span> : null}
//                 </div>

//                 <div className="formLabel">
//                     <label htmlFor='email'>E-mail</label>
//                     <input id='email' 
//                     placeholder='a.2@dev.com' 
//                     type='text' 
//                     name='email' 
//                     onChange={formik.handleChange} 
//                     value={formik.values.email} 
//                     onBlur={formik.handleBlur}/>
//                     {formik.touched.email && formik.errors.email ? <span>{formik.errors.email}</span> : null}
//                 </div>

//                 <div className="formLabel">
//                     <label htmlFor='phoneNumber'>Phone Number</label>
//                     <input id='phoneNumber' 
//                     placeholder='' 
//                     type='text' 
//                     name='phoneNumber' 
//                     onChange={formik.handleChange} 
//                     value={formik.values.phoneNumber} 
//                     onBlur={formik.handleBlur}/>
//                     {formik.touched.phoneNumber && formik.errors.phoneNumber ? <span>{formik.errors.phoneNumber}</span> : null}
//                 </div>

//                 <div className="formLabel">
//                     <label htmlFor='dateOfBirth'>Date Of Birth</label>
//                     <input id='dateOfBirth' 
//                     placeholder='' 
//                     type='date' 
//                     name='dateOfBirth' 
//                     onChange={formik.handleChange} 
//                     value={formik.values.dateOfBirth} 
//                     onBlur={formik.handleBlur}/>
//                     {formik.touched.dateOfBirth && formik.errors.dateOfBirth ? <span>{formik.errors.dateOfBirth}</span> : null}
//                 </div>

//                 <div className="formLabel">

//                     <label htmlFor='nacionality'>Nationality</label>
//                     <Autocomplete
//                         id="nacionality"
//                         name="nacionality"
//                         sx={{ width: 300 }}
//                         options={nationalities}
//                         onChange={(e, value) => formik.setFieldValue("nacionality", value)}
//                         renderOption={(props, option) => (
//                         <Box
//                             component="li"
//                             sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
//                             {...props}
//                         >
//                             {option}
//                         </Box>
//                         )}
//                         renderInput={(params) => (
//                         <TextField
//                             {...params}
//                             label="Choose a nationality"
//                             name="nacionality"
//                         />
//                         )}
//                     />
//                     {formik.touched.nacionality && formik.errors.dateOfBirth ? <span>{formik.errors.dateOfBirth}</span> : null}
//                 </div>

//                 <div className="formLabel">
//                     <label htmlFor='languagesSpoken'>Languages Spoken</label>
//                     <Autocomplete
//                         id="languagesSpoken"
//                         name="languagesSpoken"
//                         sx={{ width: 300 }}
//                         options={languagesSpoken}
//                         onChange={(e, value) => formik.setFieldValue("languagesSpoken", value)}
//                         renderOption={(props, option) => (
//                         <Box
//                             component="li"
//                             sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
//                             {...props}
//                         >
//                             {option}
//                         </Box>
//                         )}
//                         renderInput={(params) => (
//                         <TextField
//                             {...params}
//                             label="Choose a language"
//                             name="languagesSpoken"
//                         />
//                         )}
//                     />
//                     {formik.touched.languagesSpoken && formik.errors.dateOfBirth ? <span>{formik.errors.dateOfBirth}</span> : null}
//                 </div>

//                 <button className="formBtn" type='submit'>Submit</button>
//             </form>
//         </div>
//      );
// }
 
// export default Signup;
