import React from 'react';
import { useLocation } from 'react-router-dom';
import { createContext } from "react";
import './PaymentDetail.css';
import Header from "../Header/Header";


export const UserContext = createContext(null)

export default function PaymentDetail() {

  const query = new URLSearchParams(useLocation().search);
  const payment_status = query.get("payment_status");
  const payment_id = query.get("payment_id");
  const merchant_order_id = query.get("merchant_order_id");
  const quantityPayment = query.get("quantityPayment");
  const emailUser = query.get("emailUser")

  return (
    <div>
      <div className="headerNav">
        <Header/>
      </div>
      <div className='success'>
        <h2>Your purchase has been success!</h2>
      </div>
      <div className="detailDiv">
       <ul>
         <li>
           <h3 className="detailH3">Payment Status :     {payment_status}</h3>
         </li>
         <li>
           <h3 className="detailH3">Payment ID N°:     {payment_id} </h3>
         </li>
         <li>
           <h3 className="detailH3">Payment Merchant Order ID N°:     {merchant_order_id}</h3>
         </li>
         <li>
            <h3 className="detailH3">Total of Points :{quantityPayment} Points</h3>
         </li>
         <li>
           <h3 className="detailH3">Total of Purchase :     $ {quantityPayment},00 </h3>
         </li>
       </ul>
        <div className= 'congratulations'>
            <h2>Congratulations!   {quantityPayment} Points has been assigned in your account</h2>
        </div>
        <h3 className='footerMail'>     We have sent an email to {emailUser} with more details</h3>
      </div>
    </div>
  );
}
       

        

        

       


