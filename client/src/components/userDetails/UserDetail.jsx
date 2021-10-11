import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserInfo } from "../../redux/actions/userActions";
import Typography from "@mui/material/Typography"
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import './userDetails.css';
import Grid from "@mui/material/Grid";


export default function UserDetails() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.details);
  console.log(user);

  React.useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);

  return (
    <Grid>
      <div className="headerNav">
        <Header />
      </div>
      <Grid>
        {user ? (
          <Grid className="top">
            <img src={`${user.profilePicture}`} alt="img" width="450em" height="350em"/>
            <Grid className="ficha">
              <Typography sx={{ p: 3 }} variant="h3" color="text.primary">
                <b>{user.name} {user.lastName}</b>
              </Typography>
              <Typography sx={{ p: 3 }} variant="body1" color="text.primary">
                <b>Nationality:</b> {user.nacionality}
              </Typography>
              
              <h3>Date of Birth: {user.dateOfBirth}</h3>
              <h3>e-Mail: {user.email}</h3>
              <h3>Phone Number: {user.phoneNumber}</h3>
              <h3>Languages Spoken: {user.languagesSpoken}</h3>
              <h3>Points: {user.points}</h3>
            </Grid>
            
          </Grid>
        ) : (
          <Typography alignText="center" gutterBottom variant="h5">User not found</Typography>
        )}
      </Grid>
      <div>
        <Footer/>
      </div>
    </Grid>
  );
}
