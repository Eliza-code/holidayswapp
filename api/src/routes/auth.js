const { Router } = require('express');
const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const { User } = require('../db');
const { SECRET_KEY } = process.env;
var LocalStrategy = require('passport-local').Strategy;


const router = Router();
router.use(express.json());

router.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  async function(req, res) {
    res.send('logeado');
  });

  passport.use(
    new LocalStrategy(
      {
        usernameField: 'username', 
        passwordField: 'password',
        session: false
      },
      async (username, password, done) => {
        
        const user = await User.findOne({where:{ username: username }})
        console.log(user);
        if (!user) return done(null, false);
        if (!user.password===password) { return done(null, false); }
        return done(null, user);      
        
      })
  );
  
// Configuración de la persistencia de la sesión autenticada

// Para recuperar los datos de la sesión autenticada Passport necesita dos métodos para
// serializar y deserializar al usuario de la sesión. Para ello la forma más práctica de hacerlo
// es serializando el ID del usuario para luego al deserealizar a partir de dicho ID obtener
// los demás datos de ese usuario. Esto permite que la información almacenada en la sesión sea
// lo más simple y pequeña posible

passport.serializeUser((username, done) => {
   
    done(null, username);
  });

// Al deserealizar la información del usuario va a quedar almacenada en req.user

passport.deserializeUser(async (username, done) => {
    try{
      const user = await User.findOne({ where: { username } })
      if (user) done(null, user);
    }catch(err){
      done(err, null);
    }
  });
 


module.exports = router;