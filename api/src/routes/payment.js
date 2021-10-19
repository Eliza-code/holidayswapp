const { Router } = require('express');
const express = require('express');

const createPayment = require('../controllers/payment/createPayment.js');
const deleteOrder = require('../controllers/order/deleteOrder.js');
const getPayments = require('../controllers/payment/getPayments.js');
// const updateOrderStatus = require('../controllers/order/updateOrderStatus.js');
// const getOrderById = require('../controllers/order/getOrderById.js');
// const getUserOrders = require('../controllers/order/getUserOrders.js');
// const getOrdersUser = require('../controllers/order/getOrdersUser.js');

const router = Router();
router.use(express.json());

router.post('/', createPayment);
router.get('/getPayments', getPayments);
// router.get('/getOrders', getOrders);
// router.get('/getOrderById/:orderId', getOrderById);
// router.get('/getUserOrders/:userId', getUserOrders);
// router.get('/getOrdersUser/:userId', getOrdersUser);

module.exports = router

// server.get("/detalle/:id", (req, res, next) => {
//   const id = req.params.id;

//   Payment.findOne({
//     where: {
//       id: id,
//     },
//     include: {
//       model: Payment_detail,
//       where: { paymentId: id },
//     },
//   })
//     .then((obj) => {
//       res.send(obj);
//     })
//     .catch(next);
// });

// module.exports = server;
