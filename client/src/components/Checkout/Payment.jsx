import React from "react";
import axios from "axios";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

const Payment = ({ order }) => {
  const [preference, setPreference] = React.useState(null);

//   React.useEffect(() => {
//     axios.post(`http://localhost:3001/mercadopago`, order)
//     .then(({ data }) => setPreference(data))
//     .catch((error) => console.log(error));
// }, [preference]);

//   React.useEffect(() => {
//     if (preference) {
//       const script = document.createElement("script");
//       script.type = "text/javascript";
//       script.src =
//       "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
//       script.setAttribute("data-preference-id", preference.id);
//       const form = document.getElementById("payment-form");
//       form.appendChild(script);
//     }
//   }, [preference]);

  return (
    <div>
      <Typography variant="h2">Order summary</Typography>
      {!preference && <CircularProgress />}
      <form id="payment-form" />
    </div>
    );
};

export default Payment;
