const { Router } = require("express");
const express = require("express");
const nodemailer = require("nodemailer");
const router = Router();
router.use(express.json());
require("dotenv").config();
const { PASSWORD_EMAIL_NODEMAILER, USUARIO_EMAIL } = process.env;
const { User } = require('../db');

router.post("/confirmAuth", async (req, res) => {
  console.log("mailInBack:", userMail);
  const { userMail } = req.body

  let transporter = nodemailer.createTransport({
    host: "smtp.mail.yahoo.com",
    port: 465,
    secure: false,
    service: "yahoo",
    auth: {
      user: USUARIO_EMAIL,      
      pass: PASSWORD_EMAIL_NODEMAILER,
    },
  });

  try {
    let email = await transporter.sendMail({
      from: '"HolidaySwApp" <holidayswapp@yahoo.com>',
      to: userMail,
      subject: "User creation",
      text: "Welcome, the user has been created successfully!",
      // html: "<div> si queres podes mandar html </div>",
    });
    console.log("email enviado!");
    res.status(200).json(email);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/reservationconfirmed", async (req, res) => {
  const {userMail, subject, text} = req.body

  let transporter = nodemailer.createTransport({
    host: "smtp.mail.yahoo.com",
    port: 465,
    secure: false,
    service: "yahoo",
    auth: {
      user: USUARIO_EMAIL,      
      pass: PASSWORD_EMAIL_NODEMAILER,
    },
  });

  try {
    let email = await transporter.sendMail({
      from: '"HolidaySwApp" <holidayswapp@yahoo.com>',
      to: userMail,
      subject: "reservation",
      text: "Hi! Your reservation has been confirmed!",
      // html: "<div> si queres podes mandar html </div>",
    });
    console.log("email enviado!");
    res.status(200).json(email);
  } catch (error) {
    res.status(500).send(error);
  }
});


router.post("/buypoints", async (req, res) => {
  const { userMail } = req.body

  let transporter = nodemailer.createTransport({
    host: "smtp.mail.yahoo.com",
    port: 465,
    secure: false,
    service: "yahoo",
    auth: {
      user: USUARIO_EMAIL,      
      pass: PASSWORD_EMAIL_NODEMAILER,
    },
  });

  try {
    let email = await transporter.sendMail({
      from: '"HolidaySwApp" <holidayswapp@yahoo.com>',
      to: userMail,
      subject: "online purchases",
      text: "Your purchase of points was successful!!",
      // html: "<div> si queres podes mandar html </div>",
    });
    console.log("email enviado!");
    res.status(200).json(email);
  } catch (error) {
    res.status(500).send(error);
  }
});


router.post("/rewiewemail", async (req, res) => {
  const { userMail } = req.body

  let transporter = nodemailer.createTransport({
    host: "smtp.mail.yahoo.com",
    port: 465,
    secure: false,
    service: "yahoo",
    auth: {
      user: USUARIO_EMAIL,      
      pass: PASSWORD_EMAIL_NODEMAILER,
    },
  });

  try {
    let email = await transporter.sendMail({
      from: '"HolidaySwApp" <holidayswapp@yahoo.com>',
      to: userMail,
      subject: "online purchases",
      text: "Thank you very much for trusting us, your review has already been published",
      // html: "<div> si queres podes mandar html </div>",
    });
    console.log("email enviado!");
    res.status(200).json(email);
  } catch (error) {
    res.status(500).send(error);
  }
});



module.exports = router;

// let transporter = nodemailer.createTransport({
//   host: "smtp.mail.yahoo.com",
//   port: 465,
//   secure: false, // upgrade later with STARTTLS
//   service: "yahoo",
//   auth: {
//     user: "henry.pg@yahoo.com",
//     pass: PASSWORD_EMAIL_NODEMAILER, //acá va el password del correo. no es el que usas para loguearte, hay que crear un password para aplicaciones

//     password generado : gcvxmmrjdvpoomvf
//   },
// });

// let email = await transporter.sendMail({
//   from: '"henry ecommerce" <henry.pg@yahoo.com>', // sender address
//   to: user_email, // list of receivers
//   subject: "aca va el subject",
//   text: "Acá va el cuerpo del email", // plain text body
//   // html: "<div> si queres podes mandar html </div>",
// });
