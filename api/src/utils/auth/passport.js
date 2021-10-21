var express = require("express");
const passport = require("passport");
const { Router } = require("express");
const { User } = require("../../db");
const jwt = require("jsonwebtoken");
var LocalStrategy = require("passport-local").Strategy;

require("dotenv").config();
const { SECRET_KEY } = process.env;

const router = Router();
router.use(express.json());

// Configuración de estrategia local de Passport.

// Para configurar la estrategia local de Passport es necesario crear una nueva instancia
// de Strategy pasándole como parámetro una función ("Verify Callback") que reciba las credenciales del usuario
// (Usuario y contraseña) y una función que suele definirse como "done" que debe ser invocada
// de distintas formas según si las credenciales son válidas o no:
//  - Si las credenciales son validas --> done(null, user) (Donde user es el objeto conteniendo los datos del usuario)
//  - Si las credenciales son invalidas --> done(null, false)
//  - Si hubo un error durante la ejecución de esta función --> done(err)

passport.use(
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
      session: false,
    },
    async (username, password, done) => {
      const user = await User.findOne({ where: { username: username } });

      if (!user) return done(null, false);
      if (password !== user.dataValues.password) {
        return done(null, false);
      }
      return done(null, user);
    }
  )
);

// Configuración de la persistencia de la sesión autenticada

// Para recuperar los datos de la sesión autenticada Passport necesita dos métodos para
// serializar y deserializar al usuario de la sesión. Para ello la forma más práctica de hacerlo
// es serializando el ID del usuario para luego al deserealizar a partir de dicho ID obtener
// los demás datos de ese usuario. Esto permite que la información almacenada en la sesión sea
// lo más simple y pequeña posible

passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Al deserealizar la información del usuario va a quedar almacenada en req.user
passport.deserializeUser((id, done) => {
  User.findOne({ _id: id }, (err, user) => {
    const userInformation = {
      username: user.username,
    };
    done(err, userInformation); //ESTO ES PARA Q MANDE AL FRONT SOLO USERNAME Y NO CONTRASEÑA!!!
  });
});

const BearerStrategy = require("passport-http-bearer").Strategy;

passport.use(
  new BearerStrategy((token, done) => {
    jwt.verify(token, SECRET_KEY, function (err, usuario) {
      if (err) return done(err);
      return done(null, usuario ? usuario : false);
    });
  })
);
