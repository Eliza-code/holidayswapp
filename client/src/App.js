import React from "react";
import { Switch, Route } from "react-router-dom";

import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import AdminRoute from "./routes/AdminRoute";

import Home from "./components/Home/Home";
import HouseDetail from "./components/HouseDetail/HouseDetail";
import AboutUs from "./components/aboutUs/aboutUs";
import CityResults from "./components/CityReservation/CityResults";
import UserDetail from "./components/userDetails/UserDetail";
import AnnouncementCreation from "./components/AnnouncementCreation/AnnouncementCreation";
import ReviewForm from "./components/Reviews/ReviewForm";
import Admin from "./components/Admin/Admin";

// User
import Signup from "./components/SignUp/Signup";
import SignIn from "./components/SignIn/SignIn";
import Booking from "./components/Booking/Booking";
import MyBookings from "./components/Booking/MyBookings";
import Favorite from "./components/Favorite/Favorite";
import MercadoPago from "./components/MercadoPago/MercadoPago";
import PaymentDetail from "./components/PaymentDetail/PaymentDetail";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <PublicRoute exact path="/signin" component={SignIn} />
        <PublicRoute exact path="/register" component={Signup} />
        <PrivateRoute exact path="/profile" component={UserDetail} />
        <PrivateRoute
          exact
          path="/announcement"
          component={AnnouncementCreation}
        />
        <PrivateRoute exact path="/reviews/create" component={ReviewForm} />
        <PrivateRoute exact path="/mercadopago" component={MercadoPago} />
        <PrivateRoute exact path="/paymentdetail" component={PaymentDetail} />
        <Route exact path="/announcements/:id" component={HouseDetail} />
        <Route exact path="/announcements/city/:name" component={CityResults} />
        <Route exact path="/aboutus" component={AboutUs} />
        <PrivateRoute exact path="/booking" component={Booking} />
        <PrivateRoute exact path="/my-bookings" component={MyBookings} />
        <PrivateRoute exact path="/my-favorites" component={Favorite} />
        <AdminRoute exact path="/admin" component={Admin} />
      </Switch>
    </div>
  );
}

export default App;
