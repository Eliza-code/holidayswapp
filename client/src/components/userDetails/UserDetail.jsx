import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserInfo } from "../../redux/actions/userActions";
// import HouseCard from "./HouseCard";
import Typography from "@mui/material/Typography";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./userDetails.css";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
// import CircularProgress from "@mui/material/CircularProgress";
import NavBar from "../NavBar/NavBar";

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

// const houses = [{
//   title: "House 1",
//   image: ["https://d25rq8gxcq0p71.cloudfront.net/dictionary-images/324/768038a5-5745-4520-9496-218a732b46ea.jpg"]
// }]

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
        <NavBar />
      </div>
      {user ? (
        <Grid>         
          <Typography
            textAlign="center"
            sx={{ p: 3 }}
            variant="h5"
            color="text.primary"
          >
            <b>My Profile</b>
          </Typography>
          <Grid container m={5}justifyContent="center">
            <Grid item xs={3}>
              <Avatar
                sx={{ width: 200, height: 200 }}
                src={user.profilePicture}
                alt={user.username}
              />
            </Grid>
            <Grid item xs={5}>
              <Typography sx={{ p: 3 }} variant="body1" color="text.primary">
                <b> Name:</b> {user.name} {user.lastName}
              </Typography>
              <Typography sx={{ p: 3 }} variant="body1" color="text.primary">
                <b> Username: </b> {user.username}
              </Typography>
              <Typography sx={{ p: 3 }} variant="body1" color="text.primary">
                <b>Description:</b> {user.description}
              </Typography>
              <Typography sx={{ p: 3 }} variant="body1" color="text.primary">
                <b>Nationality:</b> {user.nacionality}
              </Typography>
              <Typography sx={{ p: 3 }} variant="body1" color="text.primary">
                <b> Date of Birth:</b> {user.dateOfBirth}
              </Typography>
              <Typography sx={{ p: 3 }} variant="body1" color="text.primary">
                <b> E-Mail:</b> {user.email}
              </Typography>
              <Typography sx={{ p: 3 }} variant="body1" color="text.primary">
                <b> Phone Number:</b> {user.phoneNumber}
              </Typography>
              <Typography sx={{ p: 3 }} variant="body1" color="text.primary">
                <b> Languages Spoken:</b> {user.languagesSpoken}
              </Typography>
              <Typography sx={{ p: 3 }} variant="body1" color="text.primary">
                <b> Points: </b> {user.points}
              </Typography>
            </Grid>
          </Grid>
          {/* <Grid>
            {houses.length ? (
              houses.map((house, idx) => <HouseCard key={idx} house={house} />)
            ) : (
              <CircularProgress />
            )
            }
            </Grid> */}
        </Grid>
      ) : (
        <Typography alignText="center" gutterBottom variant="h5">
          User not found
        </Typography>
      )}
      <div>
        <Footer />
      </div>
    </div>
  );
}
