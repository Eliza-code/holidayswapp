import React, { useState } from "react";
import pointsImg from "./puntos.png";
import axios from "axios";
import { getUserInfo } from "../../redux/actions/userActions";
import { useSelector, useDispatch } from "react-redux";
import s from "./Checkout.module.css";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

export default function Checkout(/* { productos, data } */) {
  const [input, setInput] = useState({
    quantity: "",
  });
  const userId = useSelector((state) => state.userReducer.details);

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);

  const handleCheckout = (e) => {
<<<<<<< HEAD
    let quantity = input.quantity;
    console.log("input.quantity", input.quantity);

    e.preventDefault();
    console.log("input.quantity", input.quantity);
    console.log("userId usuario logueado", userId);

    axios
      .post(`http://localhost:3001/mercadopago`, { quantity, userId: userId })
      .then((response) => (window.location = response.data))
      .catch((err) => console.log(err));
  };
=======
    let quantity = input.quantity
    //console.log("input.quantity", input.quantity)

    e.preventDefault()
    //console.log("input.quantity", input.quantity)
    //console.log("userId usuario logueado", userId)
   
    axios.post(`http://localhost:3001/mercadopago`, { quantity, userId: userId })
      .then((response) => window.location = response.data)
      .catch((err) => console.log(err))
  }
>>>>>>> eef3f53f737b7ff298fec8d9da4cf42e71d8eb38

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
      <div className={s.footerCheckout}>
        <Footer />
      </div>
    </div>
  );
}
