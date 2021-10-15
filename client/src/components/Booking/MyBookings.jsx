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
import { getUserInfo } from "../../redux/actions/userActions";
import {
  getUserOrders,
  getOrdersToUser,
} from "../../redux/actions/bookingActions";
import "../Booking/booking.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import CardOrder from "./CardOrder";

const useStyles = makeStyles((theme) => ({
  root: {},
  divider: {},
  list: {
    padding: "0 30px",
  },
//   title:{
//       marginBottom:30,
//   },
  cards:{
      paddingLeft:10,
  }
}));

const MyBookings = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [selectedIndex, setSelectedIndex] = useState(0);
  // console.log(selectedIndex,"Mi Index")

  const token = window.localStorage.getItem("user");
//   console.log(token, "usuario del local");

  const userInfo = useSelector((state) => state.userReducer.details);
//   console.log(userInfo, "miuserInfo");
  const userId = userInfo?.id;
//   console.log(userId, "dato para despachar");

// const userInfo2 = useSelector((state) => state.bookingReducer.ordersToUser.user);
// //   console.log(userInfo, "miuserInfo");
//   const userId2 = userInfo2?.id;
// //   console.log(userId, "dato para despachar");

  const ordersByUser = useSelector((state) => state.bookingReducer.ordersByUser);
  // const ordersByUser = data[0]?.orders;
  // console.log(ordersByUser, "datos by user");
  console.log(ordersByUser,"byUser")

  const ordersToUsers = useSelector((state) => state.bookingReducer.ordersToUser);
  // const ordersToUsers = data2[1]?.orders;
  console.log(ordersToUsers,"toUser")
  // console.log( ordersToUsers,"LO NUEVO");
//   console.log(ordersToUser, "datos to user");

  useEffect(() => {
    dispatch(getUserInfo());
    dispatch(getUserOrders(userId));
    dispatch(getOrdersToUser(userId));
  }, [userId]);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

 
  return (
    <Grid className="headerNav" >
      <Grid item xs={12}>
        <Header />
        <NavBar />
      </Grid>

      <Grid container>
        <Grid item xs={12} align="center" >
          <Typography className={classes.title} variant="h4">My Bookings</Typography>
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
        {selectedIndex===0 && (ordersByUser?.length
          ? ordersByUser.map((e, idKey) => (
              <Grid>
                <CardOrder key={idKey} orders={e} userInfo={userInfo}></CardOrder>  
              </Grid>              
            ))
          : "No hay ordenes") }
          {selectedIndex===1 && (ordersToUsers?.length
          ? ordersToUsers.map((e, idKey) => (
              <Grid>
                <CardOrder  key={idKey} orders={e} userInfo={false}></CardOrder>  
              </Grid>              
            ))
          : "No hay ordenes") }
          {/* {console.log("Reservas recibidas Info",ordersToUsers[0].userId)} */}
        {/* {ordersByUser
          ? ordersByUser.map((e, idKey) => (
              <Grid>
                <CardOrder key={idKey} orders={e} userInfo={userInfo}></CardOrder>  
              </Grid>              
            ))
          : "No hay ordenes"} */}
      </Grid>

      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default MyBookings;
