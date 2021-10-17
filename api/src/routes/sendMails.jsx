const { Router } = require("express");
const express = require("express");
const nodemailer = require("nodemailer");
const router = Router();
router.use(express.json());
require("dotenv").config();
const { PASSWORD_EMAIL_NODEMAILER, USUARIO_EMAIL } = process.env;

router.post("/confirmAuth", async (req, res) => {
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
      subject: "Creacion de usuario",
      text: "usuario creado con exito",
      // html: "<div> si queres podes mandar html </div>",
    });
    console.log("email enviado!");
    res.status(200).json(email);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/confirmedreservation", async (req, res) => {
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
      subject: subject,
      text: text,
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
