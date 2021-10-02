const { Router } = require("express");
const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const { User } = require("../db");
const { SECRET_KEY } = process.env;

const router = Router();
router.use(express.json());

router.post("/login",
  passport.authenticate('local', {
    successRedirect: "/",
    failureRedirect: "/login",
  })
);

// router.post("/login", function (req, res, next) {
//     passport.authenticate(
//         "local",
//         { session: false },
//         async function (err, user) {
//             if (err) return next(err);
//             else if (!user) return res.sendStatus(401);
//             else {
//                 return res.send(
//                     await jwt.sign(
//                         {
//                             id: user.id,
//                             email: user.email,
//                             isAdmin: user.isAdmin,
//                             isDeleted: user.isDeleted,
//                         },
//                         SECRET_KEY,
//                         { expiresIn: "24hr" }
//                     )
//                 );
//             }
//         }
//     )(req, res, next);
// });

//Con esta ruta enviamos un token de session
router.get("/user", async (req, res) => {
  try {
    const user = await User.findOne({
      where: { id: req.user.id },
    });

    const { id, email, isAdmin, isDeleted } = user;
    let token = await jwt.sign({ id, email, isAdmin, isDeleted }, SECRET_KEY, {
      expiresIn: "24hr",
    });

    res.json(token);
  } catch (error) {
    res.json(error.message);
  }
});

module.exports = router;
