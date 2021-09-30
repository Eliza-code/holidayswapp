<<<<<<< HEAD
const router = require('express').Router();
const express = require('express');
const {User} = require('./../db');
const {Announcement} = require('./../db');

router.use(express.json());

router.post('/', async (req, res) => {
    let user = req.body;
    try{
     const newUser = await User.create({
        ...user,
        email: user.email.toLowerCase()
    })
    return res.json(newUser)
    } catch (error) {
      conaole.log(error)
    }

});

router.get("/", async (req, res) => {
    
    try {
      let allUsers = await User.findAll({
          include: {
              model: Announcement
          }
      });
      allUsers ? res.json(allUsers) : res.sendStatus(404);
    } catch (error) {
      res.status(400).send(error);
    }
  });
=======
const { Router } = require('express');
const express = require('express');
const {User} =require('../../src/db')

const createUser = require('../controllers/user/createUser');
const getUserById = require('../controllers/user/getUserById');

const router = Router();
router.use(express.json());

router.post('/', createUser

);

// router.get('/getUser/:id', getUserById);




>>>>>>> 6c600863fa966ec00923b64eacc2c28c61156fb4

module.exports = router;