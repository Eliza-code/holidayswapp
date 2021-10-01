const { Router } = require('express');
const express = require('express');


const createUser = require('../controllers/user/createUser');
const getUserById = require('../controllers/user/getUserById');

const router = Router();
router.use(express.json());

router.post('/', createUser

);

// router.get('/getUser/:id', getUserById);





module.exports = router;