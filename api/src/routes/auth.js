const { Router } = require("express");
const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const { User } = require('../db');
const { SECRET_KEY } = process.env;


const router = Router();
router.use(express.json());


router.post("/login", (req, res, next) => {
  passport.authenticate("local", async (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No User Exists");
    else {
      const token = await jwt.sign(
        {
          id: user.id,
          email: user.email,
          isAdmin: user.isAdmin,
          isDeleted: user.isDeleted,
        },
        SECRET_KEY,
        { expiresIn: "24hr" }
      )
      console.log(token)
      return res.json({id:user.id,isAdmin:user.isAdmin,isDeleted:user.isDeleted,token});
    }
  })(req, res, next);
});


router.get('/profile', 
passport.authenticate('bearer', { session: false }),
async function(req, res) {
  try {
    const user = await User.findOne({
        where: { id: req.user.id },
    });
    res.json(user);
} catch (error) {
    res.json(error.message);
} 
});


router.get("/logout", (req, res, next) => {
  req.logOut();
  req.session = null;
  res.send("Logged out");
});

//Ruta para comprobar si un usuario es admin o no y hacer la Ruta de front privada para admin
router.post("/admin", async (req, res, next) => {
  let token = req.body;
  try {
      let email = jwt.verify(token, SECRET_KEY).email.toLowerCase();
      let isAdmin = await User.findOne({
          where: { email: email, isAdmin: true },
      });
      isAdmin ? res.json(true) : res.json(false);
  } catch (error) {
     console.log(error)
  }
});

module.exports = router;
