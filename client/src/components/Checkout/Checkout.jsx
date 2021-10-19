import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { getUserInfo } from "../../redux/actions/userActions";
import { useSelector, useDispatch } from "react-redux";
import s from './Checkout.module.css';

export default function Checkout({ /* productos, */ data }) {

  const [input, setInput] = useState({
    quantity: ""
  })


  /* useEffect(()=>{
   const script = document.createElement('script'); //Crea un elemento html script
   
   const attr_data_preference = document.createAttribute('data-preference-id') //Crea un nodo atribute
   attr_data_preference.value = data.id  //Le asigna como valor el id que devuelve MP
   
   //Agrega atributos al elemento script
   script.src="https://www.mercadopago.com.mx/integrations/v1/web-payment-checkout.js";  
   script.setAttributeNode(attr_data_preference)  
   
   console.log(data)
   
   //Agrega el script como nodo hijo del elemento form
   document.getElementById('form1').appendChild(script)
   return () =>{
     //Elimina el script como nodo hijo del elemento form
     document.getElementById('form1').removeChild(script);
   }
  },[data]) */
  const userId = useSelector((state) => state.userReducer.details);

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);

  const handleCheckout = (e) => {
    let quantity = input.quantity
    e.preventDefault()
    axios.post(`http://localhost:3001/mercadopago/payment`, { userId: userId, quantity })
      .then((response) => window.location = response.data)
      .catch((err) => console.log(err))

    console.log("input.quantity", input.quantity)
   
    axios.post(`http://localhost:3001/mercadopago`, { quantity })
      .then((response) => window.location = response.data)
      .catch((err) => console.log(err))
  }

  const handleChangeQuantity = e => {
    /* const { value } = e.target; */
    setInput({ [e.target.name]: e.target.value });
    /*  dispatch(changeQuantity(product, e.target.value, userId)); */
  };

  const handleSubmit = e => {
    const { value } = e.target;

    /*  dispatch(changeQuantity(product, e.target.value, userId)); */
  };
  return (
    <div>

      <form id='form1' onSubmit={handleSubmit}>

        <h4>Checkout</h4>
        <div className={s.gridContainer} >

          {/* productos.map((producto, i) => {
            return(
                <div className={s.products} key={i}>
                  <ul className={s.ul} >
                    <li>{producto.title}</li>
                    <li>{'$' + producto.price}</li> 
                    <li>{producto.quantity}</li>
                  </ul>
                </div>   
            )
          }) */}

        </div>
      </form>
      <form onSubmit={handleCheckout}>

        <input type="number" onChange={handleChangeQuantity} value={input.quantity} name="quantity" />
        <button type='submit'>BUY!</button>
      </form>

    </div>
  )
}