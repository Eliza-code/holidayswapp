const e = require('express');
const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const { Announcement } = require("../db");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const announcement = require('./announcement')
router.use("/announcements", announcement);

const user = require("./user")
router.use("/users", user);


module.exports = router  

