import React from 'react';
import { useFormik } from 'formik';
import '../SignUp/Signup.css';

const initialValues = {
    username:'',
    password:'',
    profilePicture:'',
    name:'',
    lastname:'',
    email:'',
    phonenumber:'',
    dateOfBirth:'',
    nationality:'',
    languagesSpoken:'',
}

const onSubmit = (e) => {
    e.preventDefault();
    console.log("work");
}

const validate= values => {
    let errors = {}
    if(!values.username){
        errors.username = 'Required';
    } 

    if(!values.password){
        errors.password = 'Required'
    }else if(!/([A-Za-z][0-9]){5}/i.test(values.password)) {
        errors.password = 'Must contain letters, numbers and more than 4 characters';
    }else if( values.password !== values.confirmpassword){
        errors.confirmpassword='Pasword ust be the same';
    }
    
    // if(values.profilePicture !== "" && !/^(ftp|http|https):\/\/[^ "]+$/.test(values.profilePicture)){
    //     errors.profilePicture = 'Must be an url';
    // }
    if(!values.name){
        errors.name = 'Required';
    } 
    if(!values.lastname){
        errors.lastname = 'Required';
    } 

    if(!values.email){
        errors.email = 'Required';
    } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(values.email)){
        errors.email = 'Invalid email format';
    }

    if( values.phonenumber){
        if(!/^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/.test(values.phonenumber)){
            errors.phonenumber = 'Enter a valid phone number';
        }
    }
    return errors;
}

const Signup = () => {

    const formik =  useFormik({
        initialValues,
        onSubmit,
        validate
    });

    console.log(formik.touched)
    return ( 
        <div className="mainForm">
            <form className="containerForm" onSubmit={formik.handleSumbit}>
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
                    <label htmlFor='lastname'>Lastname</label>
                    <input id='lastname' 
                    placeholder='Lastname' 
                    type='text' 
                    name='lastname' 
                    onChange={formik.handleChange} 
                    value={formik.values.lastname} 
                    onBlur={formik.handleBlur}/>
                    {formik.touched.lastname && formik.errors.lastname ? <span>{formik.errors.lastname}</span> : null}
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
                    <label htmlFor='phonenumber'>Phone Number</label>
                    <input id='phonenumber' 
                    placeholder='' 
                    type='text' 
                    name='phonenumber' 
                    onChange={formik.handleChange} 
                    value={formik.values.phonenumber} 
                    onBlur={formik.handleBlur}/>
                    {formik.touched.phonenumber && formik.errors.phonenumber ? <span>{formik.errors.phonenumber}</span> : null}
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
                    <label htmlFor='nationality'>Nationality</label>
                    <input id='nationality' 
                    placeholder='' 
                    type='text' 
                    name='nationality' 
                    onChange={formik.handleChange} 
                    value={formik.values.nationality} 
                    onBlur={formik.handleBlur}/>
                    {formik.touched.nationality && formik.errors.dateOfBirth ? <span>{formik.errors.dateOfBirth}</span> : null}
                </div>

                <div className="formLabel">
                    <label htmlFor='languagesSpoken'>Languages Spoken</label>
                    <input id='languagesSpoken' 
                    placeholder='' 
                    type='text' 
                    name='languagesSpoken' 
                    onChange={formik.handleChange} 
                    value={formik.values.languagesSpoken} 
                    onBlur={formik.handleBlur}/>
                    {formik.touched.languagesSpoken && formik.errors.dateOfBirth ? <span>{formik.errors.dateOfBirth}</span> : null}
                </div>

                <button className="formBtn" type='submit'>Submit</button>
            </form>
        </div>
     );
}
 
export default Signup;
