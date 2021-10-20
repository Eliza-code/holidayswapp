const server = require('express').Router();
const { Payment , Payment_detail, Points, User } = require('../db');

/* server.post('/', (req, res, next) => {
    const { quantity, userId, status } = req.body;
    
    console.log("userId", userId)
    console.log("quantity", quantity)
    console.log("req.body", req.body)

  const id = 1;
  const price = 1;
  

  Payment.create({
    userId: userId,
    status: status
  }).then((response) => {
    Promise.all(
      [ id,  price, quantity ].map((elem) => {
        Points.findByPk(elem.id)
          .then((points) => {
            const paymentId = response.dataValues.id; //nos da el id de payment

            return Payment_detail.create({
              paymentId: paymentId,
              pointId: id,
              quantity: Number(quantity),
              price: price,
            });
          })
          .then((secondResponse) => {
            //nos da el arreglo creado
            const quantity = secondResponse.dataValues.quantity;
            const pointId = secondResponse.dataValues.pointId;
            Points.decrement({ stock: quantity }, { where: { id: pointId } });
            User.increment({ points: quantity }, { where: { id: userId } });
          });
      })
    )
      .then((_) => res.send("OK"))
      .catch((err) => next(err));
  });
}); */


server.post('/', async (req, res, next) => {
    const { quantity, userId, status } = req.body;
    
    console.log("userId", userId)
    console.log("quantity", quantity)
    console.log("req.body", req.body)

  const id = 1;
  const price = 1;
  
const payment = await Payment.create({userId: userId, status: status})
const pointsId = await Points.findByPk(id) 
console.log("POINTS", pointsId)
const paymentId = payment.dataValues.id
const paymentDetail = await Payment_detail.create({
                                            paymentId: paymentId,
                                            pointId: pointsId.dataValues.id,
                                            quantity: Number(quantity),
                                            price: price,
                                            })

          
          .then((secondResponse) => {
            //nos da el arreglo creado
            const quantity = secondResponse.dataValues.quantity;
            const pointId = secondResponse.dataValues.pointId;
            Points.decrement({ stock: quantity }, { where: { id: pointId } });
            User.increment({ points: quantity }, { where: { id: userId } });
          })

      .then((_) => res.send("OK"))
      .catch((err) => next(err));
  });


server.get('/detalle/:id', (req, res, next) => {
    const id = req.params.id

    Payment.findOne({
        where: {
          id: id,
        },
        include: {
            model: Payment_detail,
            where: { orderId: id }
        }
    })
    .then(obj => {
        res.send(obj)
    })
    .catch(next)
});



module.exports = server;