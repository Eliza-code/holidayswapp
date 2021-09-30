const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const announcement = require('../utills/Announcements/data/announcements.data');
const { Announcement } = require("../db");


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const userRoutes = require('./user')
router.use('/user', userRoutes);




module.exports = router  

