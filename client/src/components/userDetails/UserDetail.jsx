import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserInfo } from "../../redux/actions/userActions";
import Typography from "@mui/material/Typography"
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import './userDetails.css'
import Announcements from "../CityReservation/Announcements";

export default function UserDetails() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.details);

  React.useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);

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
          <Typography alignText="center" gutterBottom variant="h5">User not found</Typography>
        )}
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}
