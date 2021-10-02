// var express = require('express');
// const passport = require('passport');
// const {User} = require('../../db')
// var LocalStrategy = require('passport-local').Strategy;

// router.use(express.json());
// // Configuración de estrategia local de Passport.

// // Para configurar la estrategia local de Passport es necesario crear una nueva instancia
// // de Strategy pasándole como parámetro una función ("Verify Callback") que reciba las credenciales del usuario
// // (Usuario y contraseña) y una función que suele definirse como "done" que debe ser invocada
// // de distintas formas según si las credenciales son válidas o no:
// //  - Si las credenciales son validas --> done(null, user) (Donde user es el objeto conteniendo los datos del usuario)
// //  - Si las credenciales son invalidas --> done(null, false)
// //  - Si hubo un error durante la ejecución de esta función --> done(err)

// passport.use(
//     new LocalStrategy(
//       {
//         usernameField: 'username', 
//         passwordField: 'password',
//         session: false
//       },
//       async (username, password, done) => {
        
//         const user = await User.findOne({where:{ username: username }})
//         // console.log(user);
//         if (!user) return done(null, false);
//         if (!user.password===password) { return done(null, false); }
//         return done(null, user);      
        
//       })
//   );
  
// // Configuración de la persistencia de la sesión autenticada

// // Para recuperar los datos de la sesión autenticada Passport necesita dos métodos para
// // serializar y deserializar al usuario de la sesión. Para ello la forma más práctica de hacerlo
// // es serializando el ID del usuario para luego al deserealizar a partir de dicho ID obtener
// // los demás datos de ese usuario. Esto permite que la información almacenada en la sesión sea
// // lo más simple y pequeña posible

// passport.serializeUser((username, done) => {
   
//     done(null, username);
//   });

// // Al deserealizar la información del usuario va a quedar almacenada en req.user

// passport.deserializeUser(async (username, done) => {
//     try{
//       const user = await User.findOne({ where: { username } })
//       if (user) done(null, user);
//     }catch(err){
//       done(err, null);
//     }
//   });

  
