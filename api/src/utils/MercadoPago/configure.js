// SDK de Mercado Pago
const mercadopago = require ('mercadopago');
const { ACCESS_TOKEN } = process.env;
require('dotenv').config();


//Agrega credenciales
mercadopago.configure({      // Usuario que vende
  access_token: 'APP_USR-7359461970731988-101414-1c03a1662c5bad93e5111aa2557111fa-1000320097'
});

module.exports = mercadopago;