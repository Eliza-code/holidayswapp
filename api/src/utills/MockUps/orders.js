const { User } = require('../../db');

const ordersHistory = async () => {
  try {
    const ordersExamples = {
      body: {
        id: 0,
        name: "Cosme",
        lastName: "Fulanito",
        paymentMethod: "MercadoPago",
        total: 2000.00,
        status: "created",
        points: [
        {
          units: 300,
          price: 2000.00,
          id: 1
        },{
          units: 150,
          price: 1000.00,
          id: 2
        },{
          units: 250,
          price: 1850.00,
          id: 3
        }
      ]
      }
    };
  } catch (err) {
    console.log(err.message);
  }
}
module.exports = {
  ordersHistory
};