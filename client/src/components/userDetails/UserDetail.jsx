import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { User_Details } from "../../redux/actions/postActions";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import './userDetails.css'
import Announcements from "../CityReservation/Announcements";



export default function UserDetails(props) {
  const user = useSelector((state) => state.postReducer.userDetails);
  const dispatch = useDispatch();
  const id = props.match.params.id;
  useEffect(() => {
    dispatch(User_Details(id));
  }, [dispatch, id]);

  return (
    <div>
      <div className="headerNav">
        <Header />
      </div>
      <div>
        {user ? (
          <div className="top">
            <img src={`${user.profilePicture}`} alt="img" width="450em" height="350em"/>
            <div className="ficha">
            <h1>{user.name} {user.lastName}</h1>
            <h3>Nationality: {user.nacionality}</h3>
            <h3>Date of Birth: {user.dateOfBirth}</h3>
            <h3>e-Mail: {user.email}</h3>
            <h3>Phone Number: {user.phoneNumber}</h3>
            <h3>Languages Spoken: {user.languagesSpoken}</h3>
            <h3>Points: {user.points}</h3>
            </div>
            
          </div>
        ) : (
          "no hay nada"
        )}
      </div>
      <div className="places">
        <h2>Places you may like</h2>
      </div>
      <div>
        <Announcements />
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}
