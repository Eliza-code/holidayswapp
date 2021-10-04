const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const userRoutes = require('./user')
const announcementRoutes = require('./announcement')
const reviewrRoutes = require('./review')
const favouriteRoutes = require('./favourite')
const auth = require("./auth")


router.use("/announcement", announcement);
router.use('/user', userRoutes);
router.use("/announcement", announcementRoutes);
router.use("/review", reviewrRoutes);
router.use("/favourites", favouriteRoutes);

module.exports = router  

