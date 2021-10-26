import React, { useState } from "react";
import pointsImg from "./puntos.png";
import axios from "axios";
import { getUserInfo } from "../../redux/actions/userActions";
import { useSelector, useDispatch } from "react-redux";
import s from "./Checkout.module.css";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Grid } from "@mui/material";

export default function Checkout() {
  const [input, setInput] = useState({
    quantity: "",
  });
  const userId = useSelector((state) => state.userReducer.details);

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);

  const handleCheckout = (e) => {
    let quantity = input.quantity;

    e.preventDefault();

    axios
      .post(`https://holidayswapp.herokuapp.com/mercadopago`, {
        quantity,
        userId: userId,
      })
      .then((response) => (window.location = response.data))
      .catch((err) => console.log(err));
  };

  const handleChangeQuantity = (e) => {
    setInput({ [e.target.name]: e.target.value });
  };

  return (
    <div className={s.gridContainer}>
      <div className="headerNav">
        <Header />
        <NavBar />
      </div>
      <div className={s.checkOutContainer}>
        <div className={s.titleImg}>
          <h1>Buy your points</h1>
          <img src={pointsImg} alt="Points" />
        </div>
        <div>
          <form onSubmit={handleCheckout}>
            <div className={s.pointInput}>
              <h2>Points</h2>
              <input
                type="number"
                onChange={handleChangeQuantity}
                value={input.quantity}
                name="quantity"
              />
            </div>
            <div className={s.bottom}>
              <button type="submit">BUY!</button>
            </div>
          </form>
        </div>
      </div>
      <Grid>
        <Footer />
      </Grid>
    </div>
  );
}
