import {
  BottomNavigation,
  Divider,
  Grid,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  Pagination,
} from "@mui/material";
import Stack from "@mui/material/Stack";
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
  divider: {
    paddingLeft: "30px"
  },
  list: {
    paddingLeft: "20px",
  },
    title:{
        padding:"15px 0",
    },
  cards: {
    // paddingLeft: 10,
  },
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

  const ordersByUser = useSelector(
    (state) => state.bookingReducer.ordersByUser
  );
  // const ordersByUser = data[0]?.orders;
  // console.log(ordersByUser, "datos by user");
  console.log(ordersByUser, "byUser");

  const ordersToUsers = useSelector(
    (state) => state.bookingReducer.ordersToUser
  );
  // const ordersToUsers = data2[1]?.orders;
  console.log(ordersToUsers, "toUser");
  // console.log( ordersToUsers,"LO NUEVO");
  //   console.log(ordersToUser, "datos to user");

  useEffect(() => {
    first_Page();
    dispatch(getUserInfo());
    dispatch(getUserOrders(userId));
    dispatch(getOrdersToUser(userId));
  }, [userId]);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    first_Page();
  };
  //-----------------PAGINADO-----------------------------
  const [currentPage, setCurrentPage] = useState(0);

  const next_Page = () => {
    if (ordersByUser.length <= currentPage + 3) {
      setCurrentPage(currentPage);
    } else setCurrentPage(currentPage + 3);
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
    setCurrentPage(ordersByUser.length - 3);
  };

  const filteredOrders =
    selectedIndex === 0
      ? ordersByUser?.slice(currentPage, currentPage + 3)
      : ordersToUsers?.slice(currentPage, currentPage + 3);

  // const pages = [];
  // for (let i = 1; i <= Math.ceil(ordersByUser.length / 3); i++) {
  //   pages.push(i);
  // }

  // console.log(pages);
  // const handlePagination = (e, nro) => {
  //   e.preventDefault();
  //   setCurrentPage(nro);
  // };

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

        <Grid item >
          <Divider className={classes.divider} orientation="vertical" variant="middle" />
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
                    ></CardOrder>
                  ))
                : "No hay ordenes")}
            {selectedIndex === 1 &&
              (filteredOrders?.length
                ? filteredOrders.map((e, idKey) => (
                    <CardOrder
                      key={idKey}
                      orders={e}
                      userInfo={false}
                    ></CardOrder>
                  ))
                : "No hay ordenes")}
          </Grid>
          <div>
            {filteredOrders.length === 0 ? null : filteredOrders?.length >=
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
                {/* <ul className="pagination">
                  {pages.map((number) => (
                    <li key={number} className="page-number">
                      <button
                        onClick={(e) => handlePagination(e, number)}
                        className="page-link"
                      >
                        {number}
                      </button>
                    </li>
                  ))}
                </ul> */}
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
