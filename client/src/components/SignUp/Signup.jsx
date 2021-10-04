import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import Autocomplete from "@mui/material/Autocomplete"
import TextField from "@mui/material/TextField"
import Box from "@mui/material/Box"
import './Signup.css';
import * as Yup from 'yup';
import { nationalities, validate, languagesSpoken } from "./validate"
import { postUser } from "../../redux/actions/userActions";

const initialValues = {
    username:'',
    password:'',
    confirmpassword: '',
    profilePicture:'',
    name:'',
    lastName:'',
    email:'',
    phoneNumber:'',
    dateOfBirth:'',
    nacionality:'',
    languagesSpoken:'',
}

const Signup = () => {

    const dispatch = useDispatch()

    const onSubmit = (values) => {
        console.log(values)
        dispatch(postUser({
            username: values.username,
            password: values.password,
            profilePicture: values.profilePicture,
            name: values.name,
            lastName: values.lastName,
            email: values.email,
            phoneNumber: values.phoneNumber,
            dateOfBirth: values.dateOfBirth,
            nacionality: values.nacionality,
            languagesSpoken: values.languagesSpoken
        }));
    }

    const formik =  useFormik({
        initialValues,
        onSubmit,
        validate
    });

    return ( 
        <div className="mainForm">
            <form className="containerForm" onSubmit={formik.handleSubmit}>
            <h1>Create your Profile</h1>
                <div className="formLabel">
                    <label htmlFor='username'>Username</label>
                    <input id='username' 
                    placeholder='Ej: cori47' 
                    type='text' 
                    name='username' 
                    onChange={formik.handleChange} 
                    value={formik.values.username} 
                    onBlur={formik.handleBlur}/>
                    {formik.touched.username && formik.errors.username ? <span>{formik.errors.username}</span> : null}
                </div>

                <div className="formLabel">
                    <label htmlFor='password'>Password</label>
                    <input id='password' 
                    placeholder='Password' 
                    type='password' 
                    name='password' 
                    onChange={formik.handleChange} 
                    value={formik.values.password} 
                    onBlur={formik.handleBlur} />
                    {formik.touched.password && formik.errors.password ? <span>{formik.errors.password}</span> : null}
                </div>

                <div className="formLabel">
                    <label htmlFor='confirmpassword'>Confirm Password</label>
                    <input id='confirmpassword' 
                    placeholder='Password' 
                    type='password' 
                    name='confirmpassword' 
                    onChange={formik.handleChange} 
                    value={formik.values.confirmpassword} 
                    onBlur={formik.handleBlur} />
                    {formik.touched.confirmpassword && formik.errors.confirmpassword ? <span>{formik.errors.confirmpassword}</span> : null}
                </div>

                <div className="formLabel">
                    <label htmlFor='profilePicture'>Profile Picture</label>
                    <input id='profilePicture' 
                    placeholder='.jpg'
                     type='file' 
                     name='profilePicture' 
                     onChange={formik.handleChange} 
                     value={formik.values.profilePicture}
                     onBlur={formik.handleBlur}/>
                    {formik.touched.profilePicture && formik.errors.profilePicture ? <span>{formik.errors.profilePicture}</span> : null}
                </div>

                <div className="formLabel">
                    <label htmlFor='name'>Name</label>
                    <input id='name' 
                    placeholder='Name' 
                    type='text' 
                    name='name' 
                    onChange={formik.handleChange} 
                    value={formik.values.name} 
                    onBlur={formik.handleBlur}/>
                    {formik.touched.name && formik.errors.name ? <span>{formik.errors.name}</span> : null}
                </div>

                <div className="formLabel">
                    <label htmlFor='lastName'>Lastname</label>
                    <input id='lastName' 
                    placeholder='Lastname' 
                    type='text' 
                    name='lastName' 
                    onChange={formik.handleChange} 
                    value={formik.values.lastName} 
                    onBlur={formik.handleBlur}/>
                    {formik.touched.lastName && formik.errors.lastName ? <span>{formik.errors.lastName}</span> : null}
                </div>

                <div className="formLabel">
                    <label htmlFor='email'>E-mail</label>
                    <input id='email' 
                    placeholder='a.2@dev.com' 
                    type='text' 
                    name='email' 
                    onChange={formik.handleChange} 
                    value={formik.values.email} 
                    onBlur={formik.handleBlur}/>
                    {formik.touched.email && formik.errors.email ? <span>{formik.errors.email}</span> : null}
                </div>

                <div className="formLabel">
                    <label htmlFor='phoneNumber'>Phone Number</label>
                    <input id='phoneNumber' 
                    placeholder='' 
                    type='text' 
                    name='phoneNumber' 
                    onChange={formik.handleChange} 
                    value={formik.values.phoneNumber} 
                    onBlur={formik.handleBlur}/>
                    {formik.touched.phoneNumber && formik.errors.phoneNumber ? <span>{formik.errors.phoneNumber}</span> : null}
                </div>

                <div className="formLabel">
                    <label htmlFor='dateOfBirth'>Date Of Birth</label>
                    <input id='dateOfBirth' 
                    placeholder='' 
                    type='date' 
                    name='dateOfBirth' 
                    onChange={formik.handleChange} 
                    value={formik.values.dateOfBirth} 
                    onBlur={formik.handleBlur}/>
                    {formik.touched.dateOfBirth && formik.errors.dateOfBirth ? <span>{formik.errors.dateOfBirth}</span> : null}
                </div>

                <div className="formLabel">

                    <label htmlFor='nacionality'>Nationality</label>
                    <Autocomplete
                        id="nacionality"
                        name="nacionality"
                        sx={{ width: 300 }}
                        options={nationalities}
                        onChange={(e, value) => formik.setFieldValue("nacionality", value)}
                        renderOption={(props, option) => (
                        <Box
                            component="li"
                            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                            {...props}
                        >
                            {option}
                        </Box>
                        )}
                        renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Choose a nationality"
                            name="nacionality"
                        />
                        )}
                    />
                    {formik.touched.nacionality && formik.errors.dateOfBirth ? <span>{formik.errors.dateOfBirth}</span> : null}
                </div>

                <div className="formLabel">
                    <label htmlFor='languagesSpoken'>Languages Spoken</label>
                    <Autocomplete
                        id="languagesSpoken"
                        name="languagesSpoken"
                        sx={{ width: 300 }}
                        options={languagesSpoken}
                        onChange={(e, value) => formik.setFieldValue("languagesSpoken", value)}
                        renderOption={(props, option) => (
                        <Box
                            component="li"
                            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                            {...props}
                        >
                            {option}
                        </Box>
                        )}
                        renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Choose a language"
                            name="languagesSpoken"
                        />
                        )}
                    />
                    {formik.touched.languagesSpoken && formik.errors.dateOfBirth ? <span>{formik.errors.dateOfBirth}</span> : null}
                </div>

                <button className="formBtn" type='submit'>Submit</button>
            </form>
        </div>
     );
}
 
export default Signup;
