const { Router } = require('express');
const express = require('express');
const {User} =require('../db');
const {Announcement} =require('../db');

const createUser = require('../controllers/user/createUser');
const getUserById = require('../controllers/user/getUserById');
const announcements = require('../utills/Announcements/data/announcements.data');

const router = Router();
router.use(express.json());

router.post('/', createUser

);

router.get('/', async(req, res) => {
    try {
        const user = await User.findAll({
           include: {
               as: "anuncios",
               model: Announcement,
           }
         })
         res.send(user);
    } catch (error) {
        res.status(404).send(error);
      }
});





module.exports = router;