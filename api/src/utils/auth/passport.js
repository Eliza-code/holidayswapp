var express = require('express');
var passport = require('passport');
var Strategy = require('passport-local').Strategy;

// Configuración de estrategia local de Passport.

// Para configurar la estrategia local de Passport es necesario crear una nueva instancia
// de Strategy pasándole como parámetro una función ("Verify Callback") que reciba las credenciales del usuario
// (Usuario y contraseña) y una función que suele definirse como "done" que debe ser invocada
// de distintas formas según si las credenciales son válidas o no:
//  - Si las credenciales son validas --> done(null, user) (Donde user es el objeto conteniendo los datos del usuario)
//  - Si las credenciales son invalidas --> done(null, false)
//  - Si hubo un error durante la ejecución de esta función --> done(err)

// passport.use(new Strategy(
//     function(username, password, done) {
//       db.users.findByUsername(username)
//         .then((user) => {
//           if(!user) {
//             return done(null, false);
//           }
//           if(user.password != password) {
//             return done(null, false);
//           }
//           return done(null, user);
//         })
//       .catch(err => {
//         return done(err);
//       })
//     }));
  