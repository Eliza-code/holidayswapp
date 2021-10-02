var express = require("express");
var passport = require("passport");
const bcrypt = require("bcryptjs");
var LocalStrategy = require("passport-local").Strategy;
const { User } = require("../../db");

// Configuración de estrategia local de Passport.

// Para configurar la estrategia local de Passport es necesario crear una nueva instancia
// de Strategy pasándole como parámetro una función ("Verify Callback") que reciba las credenciales del usuario
// (Usuario y contraseña) y una función que suele definirse como "done" que debe ser invocada
// de distintas formas según si las credenciales son válidas o no:
//  - Si las credenciales son validas --> done(null, user) (Donde user es el objeto conteniendo los datos del usuario)
//  - Si las credenciales son invalidas --> done(null, false)
//  - Si hubo un error durante la ejecución de esta función --> done(err)

passport.use('local',new LocalStrategy(
    function(username, password, done) {
      User.findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        if (!user.verifyPassword(password)) { return done(null, false); }
        return done(null, user);
      });
    }
  ));
// passport.use(
//   new LocalStrategy(
//     {
//       usernameField: "username",
//       passwordField: "password",
//       session: false,
//     },

    
//     async (username, password, done) => {
//     //   email = email.toLowerCase();
//       const user = await User.findOne({ where: { username: username } });
//       if (!user) return done(null, false);
//       bcrypt.compare(password, user.password, (err, result) => {
//         if (err) {
//           return done(err);
//         }
//         if (!result) {
//           return done(null, false);
//         } else {
//           return done(null, user);
//         }
//       });
//     }
//   )
// );

// Configuración de la persistencia de la sesión autenticada

// Para recuperar los datos de la sesión autenticada Passport necesita dos métodos para
// serializar y deserializar al usuario de la sesión. Para ello la forma más práctica de hacerlo
// es serializando el ID del usuario para luego al deserealizar a partir de dicho ID obtener
// los demás datos de ese usuario. Esto permite que la información almacenada en la sesión sea
// lo más simple y pequeña posible

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

// Al deserealizar la información del usuario va a quedar almacenada en req.user

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findOne({ where: { id } });
    if (user) done(null, user);
  } catch (err) {
    done(err, null);
  }
});


