const { Router } = require("express");

const router = Router();

const orderRoutes = require("./order");
const userRoutes = require("./user");
const announcementRoutes = require("./announcement");
const reviewrRoutes = require("./review");
const favouriteRoutes = require("./favourite");
const mercadopagoRoutes = require("./mercadopago");
const pointsRoutes = require("./points");
const auth = require("./auth");
const emails = require("./sendMails.jsx");

router.use("/order", orderRoutes);
router.use("/user", userRoutes);
router.use("/announcement", announcementRoutes);
router.use("/review", reviewrRoutes);
router.use("/favourites", favouriteRoutes);
router.use("/mercadopago", mercadopagoRoutes);
router.use("/points", pointsRoutes);
router.use("/auth", auth);
router.use("/mails", emails);

module.exports = router;
