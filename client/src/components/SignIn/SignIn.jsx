import React, {useState} from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import './Signin.css';
import {postSignIn} from '../../redux/actions/userActions';


const SignIn = () => {

    const [input, setInput] = useState({
        username:'',
        password:','
    })
   

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setInput({...input, [e.target.name] : e.target.value});
      }
    

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('works')
        dispatch(postSignIn(input));
    }

    return ( 
        <div className="mainForm">
        <form className="containerForm" onSubmit={handleSubmit}>
            <h1>Sign In</h1>
                <div className="formLabel">
                    <label htmlFor='username'>Username</label>
                    <input id='username' 
                    placeholder='Username' 
                    type='text' 
                    name='username' 
                    value={input.username}
                    onChange={ handleChange } 
                    />
                </div>

                <div className="formLabel">
                    <label htmlFor='password'>Password</label>
                    <input id='password' 
                    placeholder='Password' 
                    type='password' 
                    name='password' 
                    value={input.password}
                    onChange={ handleChange }  
                    />
                </div>
            <button className="formBtn" type='submit'>Submit</button>
        </form>

        </div>
     );
}
 
export default SignIn;