const server = require('express').Router();
const { Payment , Payment_detail, Points, User } = require('../db');

server.post('/', (req, res, next) => {
    const { userId, status, quantity } = req.body
    console.log("userId", userId)
    console.log("status", status)
    

    Payment.create({
        userId: userId,
        status: status
    })
    .then(response => {
        Promise.all(
        orderlines.map(elem => {
            Points.findByPk( elem.id)
              .then(producto =>{
                const paymentId = response.dataValues.id //nos da el id de payment
                console.log("PaymentId", paymentId)    
                return Payment_detail.create({
                    paymentId: paymentId,
                    pointId: producto.id,
                    quantity: Number(quantity),
                    price: producto.price
                })
              })
                .then(secondResponse => { //nos da el arreglo creado
                    const cant = secondResponse.dataValues.quantity
                    const pointId = secondResponse.dataValues.pointId
                    Points.decrement(
                        {stock: cant},
                        { where: { id: pointId } }
                    )
                    User.increment(
                        {points: cant},
                        { where: { id: userId } }
                    )
                })
            })
        )
        .then( _ => res.send("OK"))
        .catch(err => next(err))
    })
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