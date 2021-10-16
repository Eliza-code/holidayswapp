//import './MercadoPago.css'
import { useEffect, useState } from 'react'
import Checkout from '../Checkout/Checkout'
import axios from 'axios'

function MercadoPago() {
  const [datos, setDatos] = useState("")

  useEffect(()=>{
    axios
    .get("http://localhost:3001/mercadopago")
    .then((data)=>{
      setDatos(data.data)
      console.info('Contenido de data:', data)
    })
    .catch(err => console.error(err)) 
  },[])


  const productos = [
    {title: "Points", quantity: 1500, price: 1},
    {title: "Points", quantity: 1100, price: 1},
    {title: "Points", quantity: 600, price: 1}
  ]
  return (
    <div className="App">
      { 
        <Checkout productos={productos} data={datos}/>
      }
    </div>
  );
}

export default MercadoPago;