const server = require('express').Router();
const { Payment , Payment_detail, Points } = require('../db');

server.post('/', (req, res, next) => {
    const { userId, orderlines, status } = req.body

    Payment.create({
        userId: userId,
        status: status
    })
    .then(response => {
        Promise.all(
        orderlines.map(elem => {
            Points.findByPk( elem.id)
              .then(producto =>{
                const paymentId = response.dataValues.id //nos da el id de order
                
                return Payment_detail.create({
                    paymentId: paymentId,
                    pointsId: producto.id,
                    quantity: elem.quantity,
                    price: producto.price
                })
              })
                .then(secondResponse => { //nos da el arreglo creado
                    const cant = secondResponse.dataValues.quantity
                    const pointId = secondResponse.dataValues.pointsId
                    Points.decrement(
                        {stock: cant},
                        { where: { id: pointId } }
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