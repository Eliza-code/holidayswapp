import React from "react";
import "../Booking/booking.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";

const MyBookings = () => {
  return (
    <div>
      <div className="headerNav">
        <Header />
        <NavBar />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MyBookings;
