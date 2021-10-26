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

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findOne({ _id: id }, (err, user) => {
    const userInformation = {
      username: user.username,
    };
    done(err, userInformation);
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
