import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserInfo, getHousesByUserId } from "../../redux/actions/userActions";
import HouseCard from "./HouseCard";
import Typography from "@mui/material/Typography";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./userDetails.css";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import NavBar from "../NavBar/NavBar";
import Link from "@mui/material/Link";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";

export default function UserDetails() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.userReducer.details);
  const ownerHouses = useSelector((state) => state.userReducer.ownerHouses);
  
  React.useEffect(() => {
      dispatch(getUserInfo());
    }, [dispatch]);
    
  React.useEffect(() => {
    if (user.id) {
      dispatch(getHousesByUserId(user.id))
    }
  }, [user.id])
  
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
        
          <Grid container direction="row" xs={10} m={1} justifyContent="center">
            <Grid item xs={7}>
              <Grid container direction="row" xs={10} m={1} justifyContent="center">
                <Grid item xs={4}>
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
                <Grid item xs={1}>
                  <IconButton 
                      size="large" 
                      color="primary" 
                      aria-label="edit"
                      // onClick={handleOpen}
                  >
                    <EditIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={1}>
              {ownerHouses?.length ? (
                ownerHouses.map((house, idx) => <HouseCard key={idx} house={house} />)
              ) : (
                <Link href="/announcement" >
                  <Typography sx={{ p: 3 }} variant="body1" color="text.primary">
                    Post your home!
                  </Typography>
                </Link>
              )
              }
            </Grid>
          </Grid>
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
