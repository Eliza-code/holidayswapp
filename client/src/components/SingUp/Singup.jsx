import React from 'react';
import { useFormik } from 'formik';

const Singup = () => {

    const formik =  useFormik({
        initialValues: {
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
        },
        onSubmit: values => {
            console.log(values);
        },
        validate: values => {
            let error = {}
            if(!values.username) error.username = 'Required';
            if(!values.password){
                error.password = 'Required'
            }else if(!/([A-Za-z][0-9]){5}/.test(values.password)){} {
                error.password = 'The password must contain letters, number and more than 4 characteres';
            }
        }
    });


    return ( 
        <div>
            <form onSubmit={formik.handleSumbit}>
                <div>
                    <label htmlFor='username'>Username</label>
                    <input id='username' type='text' name='username' onChange={formik.handleChange} value={formik.values.username}/>
                </div>

                <div>
                    <label htmlFor='password'>Password</label>
                    <input id='password' type='password' name='password' onChange={formik.handleChange} value={formik.values.password} />
                </div>

                <div>
                    <label htmlFor='profilePicture'>Profile Picture</label>
                    <input id='profilePicture' type='url' name='profilePicture' onChange={formik.handleChange} value={formik.values.profilePicture} />
                </div>

                <div>
                    <label htmlFor='name'>Name</label>
                    <input id='name' type='text' name='name' onChange={formik.handleChange} value={formik.values.name}/>
                </div>

                <div>
                    <label htmlFor='lastname'>Lastname</label>
                    <input id='lastname' type='text' name='lastname' onChange={formik.handleChange} value={formik.values.lastname}/>
                </div>

                <div>
                    <label htmlFor='email'>E-mail</label>
                    <input id='email' type='text' name='email' onChange={formik.handleChange} value={formik.values.email}/>
                </div>

                <div>
                    <label htmlFor='phonenumber'>Phone Number</label>
                    <input id='phonenumber' type='number' name='phonenumber' onChange={formik.handleChange} value={formik.values.phonenumber} />
                </div>

                <div>
                    <label htmlFor='dateOfBirth'>Date Of Birth</label>
                    <input id='dateOfBirth' type='date' name='dateOfBirth' onChange={formik.handleChange} value={formik.values.dateOfBirth}/>
                </div>

                <div>
                    <label htmlFor='nationality'>Nationality</label>
                    <input id='nationality' type='text' name='nationality' onChange={formik.handleChange} value={formik.values.nationality}/>
                </div>

                <div>
                    <label htmlFor='languagesSpoken'>Languages Spoken</label>
                    <input id='languagesSpoken' type='text' name='languagesSpoken' onChange={formik.handleChange} value={formik.values.languagesSpoken} />
                </div>

                <button type='submit'>Submit</button>
            </form>
        </div>
     );
}
 
export default singup;
