<<<<<<< HEAD
import React, {useEffect}  from "react";
import { getHouses } from "../../redux/actions/userActions";
import { useDispatch } from "react-redux";
import Houses from "./Houses";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
=======
import React, { useEffect } from 'react';
import { getHouses } from '../../redux/actions/userActions'
import { useDispatch } from 'react-redux'
import Houses from './Houses'
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
>>>>>>> 2608dbd148be0ead1dc01f4783eff7c7444978d0

export default function Announcements() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHouses());
<<<<<<< HEAD
  }, [dispatch]);
  return (
    <div>
      <NavBar />
      <hr />
      <Houses />
      <Footer />
    </div>
  );
}
=======
  }, [dispatch])
    return (
      <div>  
        <Houses/>  
        </div>
    )
}
>>>>>>> 2608dbd148be0ead1dc01f4783eff7c7444978d0
