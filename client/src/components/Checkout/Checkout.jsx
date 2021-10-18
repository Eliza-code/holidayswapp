// import React from "react";
// import Container from "@mui/material/Container";
// import Paper from "@mui/material/Paper";
// import Payment from "./Payment";
// import ShoppingCard from "./ShoppingCard";
// import Typography from "@mui/material/Typography";

// // create order

// const Checkout = () => {
//   const [preference, setPreference] = React.useState(null);
//   const [points, setPoints] = React.useState(0);

//   const order = {
//     // userId: user.id,
//     title: "Points",
//     unit_price: 0.2,
//     quanity: 1000,
//   };

//   return (
//     <Container component="main">
//       <Paper variant="outlined">
//         <ShoppingCard points={points} handlePoints={setPoints} />
//         <Payment order={order} />
//       </Paper>
//     </Container>
//   );
// };

// export default Checkout;

// Hacer un post a la ruta del back que me crea la orden de compra.

//
import { useEffect} from 'react'
import s from './Checkout.module.css';

export default function Checkout({ productos, data }){
 useEffect(()=>{
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
 },[data])
    return(
        <div>

      <form id='form1'>

        <h4>Checkout</h4>
        <div className={s.gridContainer} >  
        {productos.map((producto, i) => {
            return(
                <div className={s.products} key={i}>
                  <ul className={s.ul} >
                    <li>{producto.title}</li>
                    <li>{'$' + producto.price}</li> 
                    <li>{producto.quantity}</li>
                  </ul>
                </div>   
            )
        })}
        </div>   
      </form>

     </div>
    )
}
