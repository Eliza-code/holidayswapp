const { Router } = require('express');
const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const { User } = require('../db');
const { SECRET_KEY } = process.env;
var LocalStrategy = require('passport-local').Strategy;
require("../utils/auth/passport")(passport);


const router = Router();
router.use(express.json());


router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No User Exists");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;      
        res.send("Successfully Authenticated");
        
      });
    }
  })(req, res, next);
});

  router.get("/user", (req, res) => {  //NO ESTA RESPONDIENDO POR EL MOMENTO..
    res.send(req.user); // The req.user stores the entire user that has been authenticated inside of it.
  }); 

  router.delete("/logout", (req, res, next) => {   //NO ESTA FUNCIONANDO,CUANDO LOGEO USUARIO SE TRABA, SIN LOGEAR, ANDA !!!
    req.logOut();   
    res.send("Logged out");
});

 


module.exports = router;