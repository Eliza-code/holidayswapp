const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');



const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const userRoutes = require('./user')
router.use('/user', userRoutes);

const announcement = require("./announcement");
router.use("/announcement", announcement);

const auth = require("./auth")
router.use("/auth", auth)



module.exports = router  

