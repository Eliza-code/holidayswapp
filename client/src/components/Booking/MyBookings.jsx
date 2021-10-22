import {
  Divider,
  Grid,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
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
  divider: {
    paddingLeft: "30px",
  },
  list: {
    paddingLeft: "20px",
  },
  title: {
    padding: "15px 0",
  },
  cards: {
    // paddingLeft: 10,
  },
}));

const MyBookings = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const userInfo = useSelector((state) => state.userReducer.details);

  const userId = userInfo?.id;

  const ordersByUser = useSelector(
    (state) => state.bookingReducer.ordersByUser
  );
  // const ordersByUser = data[0]?.orders;
  // console.log(ordersByUser, "datos by user");
  //console.log(ordersByUser, "byUser");

  const ordersToUsers = useSelector(
    (state) => state.bookingReducer.ordersToUser
  );
  // const ordersToUsers = data2[1]?.orders;
  //console.log(ordersToUsers, "toUser");
  // console.log( ordersToUsers,"LO NUEVO");
  //   console.log(ordersToUser, "datos to user");

  useEffect(() => {
    dispatch(getUserInfo());
    first_Page();
    dispatch(getUserOrders(userId));
    dispatch(getOrdersToUser(userId));
  }, [userId,currentId]);

  useEffect(() => {
    return () => {
      dispatch(getUserOrders(userId));
      dispatch(getOrdersToUser(userId));
    };
  }, [selectedIndex,currentId]);
  

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    first_Page();
  };
  //-----------------PAGINADO-----------------------------
  const [currentPage, setCurrentPage] = useState(0);
  const filteredOrders =
    selectedIndex === 0
      ? ordersByUser?.slice(currentPage, currentPage + 3)
      : ordersToUsers?.slice(currentPage, currentPage + 3);

  const next_Page = () => {
    if (selectedIndex === 0) {
      if (ordersByUser.length <= currentPage + 3) {
        setCurrentPage(currentPage);
      } else setCurrentPage(currentPage + 3);
    } else {
      if (ordersToUsers.length <= currentPage + 3) {
        setCurrentPage(currentPage);
      } else setCurrentPage(currentPage + 3);
    }
  };
  const prev_Page = () => {
    if (currentPage < 4) {
      setCurrentPage(0);
    } else {
      setCurrentPage(currentPage - 3);
    }
  };
  const first_Page = () => {
    setCurrentPage(0);
  };
  const last_Page = () => {
    if(selectedIndex===0){
     setCurrentPage(ordersByUser.length - 3); 
    }else{
      setCurrentPage(ordersToUsers.length - 3); 
    }
    
  };

  // console.log(ordersToUsers, "ordenes enviadas a Terri");
  // console.log(ordersByUser, "ver diferencia");
  return (
    <Grid className="headerNav">
      <Grid item xs={12}>
        <Header />
        <NavBar />
      </Grid>

      <Grid container>
        <Grid item xs={12} align="center">
          <Typography className={classes.title} variant="h4">
            My Bookings
          </Typography>
        </Grid>

        <Grid item xs={2} className={classes.list}>
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

        <Grid item>
          <Divider
            className={classes.divider}
            orientation="vertical"
            variant="middle"
          />
        </Grid>

        <Grid item xs={9}>
          <Grid container>
            {selectedIndex === 0 &&
              (filteredOrders?.length
                ? filteredOrders.map((e, idKey) => (
                    <CardOrder
                      key={idKey}
                      orders={e}
                      userInfo={userInfo}
                      handleUpdate={setCurrentId}
                      type="sent"
                    ></CardOrder>
                  ))
                : "No hay ordenes")}
            {selectedIndex === 1 &&
              (filteredOrders?.length
                ? filteredOrders.map((e, idKey) => (
                    <CardOrder
                      key={idKey}
                      orders={e}
                      userInfo={e.user}
                      type="received"
                      handleUpdate={setCurrentId}
                    ></CardOrder>
                  ))
                : "No hay ordenes")}
          </Grid>
          <div>
            {filteredOrders?.length === 0 ? null : filteredOrders?.length >=
              3 ? (
              <div className="arrow">
                <button className="button" onClick={first_Page}>
                  {" "}
                  {"<<"}
                </button>
                <button className="button" onClick={prev_Page}>
                  {" "}
                  {"<"}
                </button>
                <button className="button" onClick={next_Page}>
                  {" "}
                  {">"}
                </button>

                <button className="button" onClick={last_Page}>
                  {" "}
                  {">>"}
                </button>
              </div>
            ) : (
              <div className="arrow">
                <button className="button" onClick={first_Page}>
                  {" "}
                  {"<<"}
                </button>
                <button className="button" onClick={prev_Page}>
                  {" "}
                  {"<"}
                </button>
              </div>
            )}
          </div>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default MyBookings;
