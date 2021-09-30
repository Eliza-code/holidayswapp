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

module.exports = router;