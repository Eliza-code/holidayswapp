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
import React from "react";
import "../Booking/booking.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
  divider: {
    marginLeft:30,
  },
}));

const MyBookings = () => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  return (
    <Grid className="headerNav" container xs={12}>
      <Grid item xs={12} spacing={0}>
        <Header />
        <NavBar />
      </Grid>

      <Grid container>
          <Grid item xs={12} align="center"  spacing={0}>
            <Typography variant="h3" >My Bookings</Typography>
          </Grid>
        
        <Grid item>
          <List>
            <ListItemButton
              selected={selectedIndex === 0}
              onClick={(event) => handleListItemClick(event, 0)}
            >
              <ListItemText primary="Requests sent" />
            </ListItemButton>
            <ListItemButton
              selected={selectedIndex === 1}
              onClick={(event) => handleListItemClick(event, 1)}
            >
              <ListItemText primary="Requests Received" />
            </ListItemButton>
          </List>
        </Grid>
        <Divider className={classes.divider} orientation="vertical" flexItem />

        <Grid item xs={3 / 4}></Grid>
      </Grid>

      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default MyBookings;
