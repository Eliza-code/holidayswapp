import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  getUserInfo,
  getHousesByUserId,
} from "../../redux/actions/userActions";
import EditProfileForm from "./EditProfileForm";
import HouseCard from "./HouseCard";
import Typography from "@mui/material/Typography";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./userDetails.css";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import NavBar from "../NavBar/NavBar";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import EditHouseForm from "./EditHouseForm";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function UserDetails() {
  const dispatch = useDispatch();

  const [openProfile, setOpenProfile] = React.useState(false);
  const [openHouse, setOpenHouse] = React.useState(false);
  const [currentHouse, setCurrentHouse] = React.useState({});

  const user = useSelector((state) => state.userReducer.details);
  const ownerHouses = useSelector((state) => state.userReducer.ownerHouses);

  React.useEffect(() => {
    if (user.id) {
      dispatch(getHousesByUserId(user.id));
    }
    dispatch(getUserInfo());
  }, [dispatch, user.id]);

  const handleOpenProfile = () => setOpenProfile(true);
  const handleCloseProfile = () => setOpenProfile(false);

  const handleOpenHouse = () => setOpenHouse(true);
  const handleCloseHouse = () => setOpenHouse(false);

  return (
    <div>
      <div className="headerNav">
        <Header />
        <NavBar />
      </div>
      {openProfile && (
        <EditProfileForm
          user={user}
          handleOpen={handleOpenProfile}
          handleClose={handleCloseProfile}
        />
      )}
      {openHouse && (
        <EditHouseForm
          house={currentHouse}
          handleOpen={handleOpenHouse}
          handleClose={handleCloseHouse}
        />
      )}
      {!openProfile && !openHouse && user && (
        <Container maxWidth="lg">
          <Paper elevation={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                // bgcolor: "#e3f2fd"
              }}
            >
              <Typography
                textAlign="left"
                variant="h5"
                color="text.primary"
                m={5}
              >
                <b>Information</b>
              </Typography>
              <Box
                display="flex"
                justifyContent="flex-end"
                width="100%"
                mr={15}
              >
                <IconButton
                  color="primary"
                  aria-label="edit"
                  onClick={handleOpenProfile}
                >
                  <EditIcon />
                </IconButton>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    width: "90%",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 5,
                    m: 5,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      background: "rgb(2,0,36)",
                      background:
                        "linear-gradient(82deg, rgba(2,0,36,1) 0%, rgba(9,73,121,0.9948354341736695) 76%, rgba(0,212,255,1) 100%)",
                      p: 10,
                      borderRadius: 3,
                      gap: 2,
                    }}
                  >
                    <Avatar
                      sx={{ width: 200, height: 200 }}
                      src={user.profilePicture}
                      alt={user.username}
                    />
                    <Typography
                      sx={{ p: 1.5, borderRadius: 3, bgcolor: "white" }}
                      border="1px solid gray"
                      variant="body1"
                      color="text.primary"
                    >
                      <b> Name:</b> {user.name} {user.lastName}
                    </Typography>
                    <Typography
                      sx={{ p: 1.5, borderRadius: 3, bgcolor: "white" }}
                      border="1px solid gray"
                      variant="body1"
                      color="text.primary"
                    >
                      <b> Username: </b> {user.username}
                    </Typography>
                    <Typography
                      sx={{ p: 1.5, borderRadius: 3, bgcolor: "white" }}
                      border="1px solid gray"
                      variant="body1"
                      color="text.primary"
                    >
                      <b>Nationality:</b> {user.nacionality}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                      width: 450,
                    }}
                  >
                    <Typography
                      sx={{ p: 1.5, borderRadius: 3 }}
                      border="1px solid gray"
                      variant="body1"
                      color="text.primary"
                    >
                      <b>Description:</b> {user.description}
                    </Typography>

                    <Typography
                      sx={{ p: 1.5, borderRadius: 3 }}
                      border="1px solid gray"
                      variant="body1"
                      color="text.primary"
                    >
                      <b> Date of Birth:</b> {user.dateOfBirth}
                    </Typography>
                    <Typography
                      sx={{ p: 1.5, borderRadius: 3 }}
                      border="1px solid gray"
                      variant="body1"
                      color="text.primary"
                    >
                      <b> E-Mail:</b> {user.email}
                    </Typography>
                    <Typography
                      sx={{ p: 1.5, borderRadius: 3 }}
                      border="1px solid gray"
                      variant="body1"
                      color="text.primary"
                    >
                      <b> Phone Number:</b> {user.phoneNumber}
                    </Typography>
                    <Typography
                      sx={{ p: 1.5, borderRadius: 3 }}
                      border="1px solid gray"
                      variant="body1"
                      color="text.primary"
                    >
                      <b> Languages Spoken:</b>{" "}
                      {user.languagesSpoken?.join(", ")}
                    </Typography>
                    <Typography
                      sx={{ p: 1.5, borderRadius: 3 }}
                      border="1px solid gray"
                      variant="body1"
                      color="text.primary"
                    >
                      <b> Points: </b> {user.points}
                    </Typography>
                  </Box>
                </Box>
                <hr style={{ width: "90%" }} />
                <Typography variant="h5" color="text.primary">
                  <b>My places</b>
                </Typography>
                <Box display="flex" flexWrap="wrap" gap={5} mb={5}>
                  {ownerHouses?.length ? (
                    ownerHouses.map((house, idx) => (
                      <HouseCard
                        key={idx}
                        house={house}
                        handleOpen={handleOpenHouse}
                        handleClose={handleCloseHouse}
                        handleCurrentHouse={setCurrentHouse}
                      />
                    ))
                  ) : (
                    <Button
                      component={Link}
                      to="/announcement"
                      variant="outlined"
                    >
                      Post your home!
                    </Button>
                  )}
                </Box>
              </Box>
            </Box>
          </Paper>
        </Container>
      )}
      {!user && !openHouse && !openProfile && (
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
