import React from "react";
import { useSelector, useDispatch } from "react-redux";
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
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import NavBar from "../NavBar/NavBar";
import Link from "@mui/material/Link";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";

export default function UserDetails() {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const user = useSelector((state) => state.userReducer.details);
  const ownerHouses = useSelector((state) => state.userReducer.ownerHouses);

  React.useEffect(() => {
    if (user.id) {
      dispatch(getHousesByUserId(user.id));
    }
    dispatch(getUserInfo());
  }, [dispatch, user.id]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className="headerNav">
        <Header />
        <NavBar />
      </div>
      {open && (
        <React.Fragment>
          <EditProfileForm user={user} handleOpen={setOpen} />
          <Button onClick={handleClose}>BACK</Button>
        </React.Fragment>
      )}
      {!open && user ? (
        <Grid>
          <Typography
            textAlign="center"
            sx={{ p: 3 }}
            variant="h5"
            color="text.primary"
          >
            <b>My Profile</b>
          </Typography>

          <Grid
            container
            direction="row"
            xs={8}
            m={5}
            sx={{
              alignSelf: "center",
              justifyContent: "center",
              border: "2px solid black",
              flexWrap: "wrap",
            }}
            spacing={4}
            alignSelf="center"
          >
            <Grid item xs={7}>
              <Grid
                container
                sx={{ border: "2px solid black" }}
                direction="row"
                justifyContent="center"
              >
                <Grid item xs={5}>
                  <Avatar
                    sx={{ width: 200, height: 200 }}
                    src={user.profilePicture}
                    alt={user.username}
                  />
                </Grid>
                <Grid item xs={5}>
                  <Typography
                    sx={{ p: 3 }}
                    variant="body1"
                    color="text.primary"
                  >
                    <b> Name:</b> {user.name} {user.lastName}
                  </Typography>
                  <Typography
                    sx={{ p: 3 }}
                    variant="body1"
                    color="text.primary"
                  >
                    <b> Username: </b> {user.username}
                  </Typography>
                  <Typography
                    sx={{ p: 3 }}
                    variant="body1"
                    color="text.primary"
                  >
                    <b>Description:</b> {user.description}
                  </Typography>
                  <Typography
                    sx={{ p: 3 }}
                    variant="body1"
                    color="text.primary"
                  >
                    <b>Nationality:</b> {user.nacionality}
                  </Typography>
                  <Typography
                    sx={{ p: 3 }}
                    variant="body1"
                    color="text.primary"
                  >
                    <b> Date of Birth:</b> {user.dateOfBirth}
                  </Typography>
                  <Typography
                    sx={{ p: 3 }}
                    variant="body1"
                    color="text.primary"
                  >
                    <b> E-Mail:</b> {user.email}
                  </Typography>
                  <Typography
                    sx={{ p: 3 }}
                    variant="body1"
                    color="text.primary"
                  >
                    <b> Phone Number:</b> {user.phoneNumber}
                  </Typography>
                  <Typography
                    sx={{ p: 3 }}
                    variant="body1"
                    color="text.primary"
                  >
                    <b> Languages Spoken:</b> {user.languagesSpoken?.join(", ")}
                  </Typography>
                  <Typography
                    sx={{ p: 3 }}
                    variant="body1"
                    color="text.primary"
                  >
                    <b> Points: </b> {user.points}
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <IconButton
                    size="large"
                    color="primary"
                    aria-label="edit"
                    onClick={handleOpen}
                  >
                    <EditIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              justifyContent="flex-end"
              item
              sx={{ border: "2px solid black", flexWrap: "wrap" }}
            >
              {ownerHouses?.length ? (
                ownerHouses.map((house, idx) => (
                  <HouseCard key={idx} house={house} />
                ))
              ) : (
                <Link href="/announcement">
                  <Typography
                    sx={{ p: 3 }}
                    variant="body1"
                    color="text.primary"
                  >
                    Post your home!
                  </Typography>
                </Link>
              )}
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
