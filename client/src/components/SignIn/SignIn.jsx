import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import './Signin.css';
import {postSignIn} from '../../redux/actions/userActions';
import Header from '../Header/Header';

const initialValues = {
    username:'',
    password:''
}

const SignIn = () => {

    const dispatch = useDispatch();

    const onSubmit = (values) => {
        console.log(values)
        dispatch(postSignIn(values));
    }


    const formik =  useFormik({
        initialValues,
         onSubmit,
        // validate
    });


    return ( 
        <div className='singinContainer'>
            <Header/>
            <div className="mainForm">
                <form className="containerForm" onSubmit={formik.handleSubmit}>
                    <h1>Sign In</h1>
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
                    <button className="formBtn" type='submit'>Submit</button>
                </form>
            </div>
        </div>
     );
}
 
export default SignIn;