import React from 'react';
import Typography from '@material-ui/core/Typography';
import logo from '../images/logo.jpg';
import {Link} from 'react-router-dom';
import './Header.css';
const Header = () => {

    return (
        <div className='headerContainer'>
            <div className='logoLink'>
                <Link to="/" > <img src={logo} alt="logo" width="200em" height="200em"/></Link>
            </div>
            <div className='title'>
                <h2>HolidaySwApp</h2>
                <h6>Swapping Dreams</h6>
            </div>
        </div>
    )
}

export default Header;