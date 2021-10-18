import React from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Payment from "./Payment";
import ShoppingCard from "./ShoppingCard";
import Typography from "@mui/material/Typography";

// create order

const Checkout = () => {
  const [preference, setPreference] = React.useState(null);
  const [points, setPoints] = React.useState(0);

  const order = {
    // userId: user.id,
    title: "Points",
    unit_price: 0.2,
    quanity: 1000,
  };

  return (
    <Container component="main">
      <Paper variant="outlined">
        <ShoppingCard points={points} handlePoints={setPoints} />
        <Payment order={order} />
      </Paper>
    </Container>
  );
};

export default Checkout;

// Hacer un post a la ruta del back que me crea la orden de compra.

//
