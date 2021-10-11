import {
  BottomNavigation,
  Divider,
  Grid,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { React, useEffect, useState } from "react";
import {getUserInfo} from "../../redux/actions/userActions";
import {getOrdersById} from "../../redux/actions/bookingActions";
import "../Booking/booking.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {},
  divider: {},
  list: {
    padding: "0 30px",
  },
}));

const MyBookings = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [selectedIndex, setSelectedIndex] = useState(0);

  const token = window.localStorage.getItem("user");
  console.log(token, "usuario del local");

  

  const {id} = useSelector(state => state.userReducer.details)
  console.log(id,"miuserInfo")
  
  const orders = useSelector(state => state.bookingReducer.orders)
  console.log(orders)

  useEffect(() => {
    dispatch(getUserInfo());
    dispatch(getOrdersById(id))
  }, [])

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Grid className="headerNav" container >
      <Grid item xs={12}>
        <Header />
        <NavBar />
      </Grid>

      <Grid container>
        <Grid item xs={12} align="center">
          <Typography variant="h4">My Bookings</Typography>
        </Grid>

        <Grid item className={classes.list}>
          <List>
            <ListItemButton
              selected={selectedIndex === 0}
              onClick={(event) => handleListItemClick(event, 0)}
            >
              <ListItemText primary="Requests Sent" />
            </ListItemButton>
            <ListItemButton
              selected={selectedIndex === 1}
              onClick={(event) => handleListItemClick(event, 1)}
            >
              <ListItemText primary="Requests Received" />
            </ListItemButton>
          </List>
        </Grid>
        <Divider className={classes.divider} orientation="vertical" />

        <Grid item xs={3 / 4}></Grid>
      </Grid>

      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default MyBookings;
