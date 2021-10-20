import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { getUserInfo } from "../../redux/actions/userActions";
import { useSelector, useDispatch } from "react-redux";
import s from './Checkout.module.css';

export default function Checkout(/* { productos, data } */) {

  const [input, setInput] = useState({
    quantity: ""
  })
  const userId = useSelector((state) => state.userReducer.details);

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);

  const handleCheckout = (e) => {
    let quantity = input.quantity
    console.log("input.quantity", input.quantity)

    e.preventDefault()
    console.log("input.quantity", input.quantity)
    console.log("userId usuario logueado", userId)
   
    axios.post(`http://localhost:3001/mercadopago`, { quantity, userId: userId })
      .then((response) => window.location = response.data)
      .catch((err) => console.log(err))
  }

  const handleChangeQuantity = e => {
    setInput({ [e.target.name]: e.target.value });
  };

  return (
    <div>

      {/* <form id='form1' onSubmit={handleSubmit}>

        <h4>Checkout</h4>
        <div className={s.gridContainer} >

          productos.map((producto, i) => {
            return(
                <div className={s.products} key={i}>
                  <ul className={s.ul} >
                    <li>{producto.title}</li>
                    <li>{'$' + producto.price}</li> 
                    <li>{producto.quantity}</li>
                  </ul>
                </div>   
            )
          })

          </div>
      </form> */}

      <form onSubmit={handleCheckout}>

        <input type="number" onChange={handleChangeQuantity} value={input.quantity} name="quantity" />
        <button type='submit'>BUY!</button>
      </form>

     </div>
    )
}
