const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

<<<<<<< HEAD
const { Announcement } = require("../db");
=======

const announcement = require("./announcement");

>>>>>>> 6c600863fa966ec00923b64eacc2c28c61156fb4

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
<<<<<<< HEAD
const announcement = require('./announcement')
router.use("/announcements", announcement);

const user = require("./user")
router.use("/users", user);
=======
const userRoutes = require('./user')
router.use('/user', userRoutes);

router.use("/announcement", announcement);
>>>>>>> 6c600863fa966ec00923b64eacc2c28c61156fb4


module.exports = router  

