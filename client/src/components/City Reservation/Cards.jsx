import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { Announcements } from '../../redux/actions/userActions';

const Cards = ({Announcements}) => {
   const[announcement, setannouncement] = useState('');
   const dispatch = useDispatch();
   useEffect(() => {
       if(announcement) {
           Announcements()
       }
   }, [announcement, dispatch])
   console.log(announcement)
   return (
       <header><h1>Prueba</h1></header>
   )
}

const mapDispatchToProps = (dispatch) => ({
    Announcements: (announcement) => dispatch(Announcements(announcement))
})

const mapStateToProps = state => ({
    announcements: state.announcements
})

export default connect(mapStateToProps, mapDispatchToProps)(Cards)