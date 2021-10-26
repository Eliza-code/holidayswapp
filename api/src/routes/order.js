const router = require("express").Router();

const createOrder = require("../controllers/order/createOrder.js");
const deleteOrder = require("../controllers/order/deleteOrder.js");
const getOrders = require("../controllers/order/getOrders.js");
const updateOrderStatus = require("../controllers/order/updateOrderStatus.js");
const getOrderById = require("../controllers/order/getOrderById.js");
const getUserOrders = require("../controllers/order/getUserOrders.js");
const getOrdersUser = require("../controllers/order/getOrdersUser.js");

router.post("/deleteOrder", deleteOrder);
router.post("/addOrder", createOrder);
router.post("/updateOrderStatus", updateOrderStatus);
router.get("/getOrders", getOrders);
router.get("/getOrderById/:orderId", getOrderById);
router.get("/getUserOrders/:userId", getUserOrders);
router.get("/getOrdersUser/:userId", getOrdersUser);

module.exports = router;
