const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const announcement = require("./announcement");


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const userRoutes = require('./user')
router.use('/user', userRoutes);

router.use("/announcement", announcement);


module.exports = router  

