const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const orderRoutes = require('./order');
const userRoutes = require('./user')
const announcementRoutes = require('./announcement')
const reviewrRoutes = require('./review')
const favouriteRoutes = require('./favourite')
const auth = require("./auth")
const emails = require("./sendMails.jsx")

router.use('/order', orderRoutes);
router.use('/user', userRoutes);
router.use("/announcement", announcementRoutes);
router.use("/review", reviewrRoutes);
router.use("/favourites", favouriteRoutes);
router.use("/auth", auth);
router.use("/mails", emails)

module.exports = router