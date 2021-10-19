const { Router } = require("express");
const express = require("express");
const nodemailer = require("nodemailer");
const router = Router();
router.use(express.json());
require("dotenv").config();
const { PASSWORD_EMAIL_NODEMAILER, USUARIO_EMAIL } = process.env;
const { User } = require("../db");
//import  navbar  from '../utils/pictures/navbar.jpg'
//import footer from '../utils/pictures/footer.jpg'

router.post("/confirmAuth", async (req, res) => {
  const { username, email } = req.body;
  console.log("emailInBack: ", email, username);
  let transporter = await nodemailer.createTransport({
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
    let sendEmail = await transporter.sendMail({
      from: '"HolidaySwApp" <holidayswapp@yahoo.com>',
      to: email,
      subject: "User Creation 007",
      //text: "Welcome, the user has been created successfully!",
      html: `<div>
      <table style="max-width: 600px; padding: 10px; margin:0 auto; border-collapse: collapse;">
		<tr>
			<td style="padding: 0">
				<img style="padding: 0; display: block"
					src='https://lh3.googleusercontent.com/qdKEZVC8QOewlgkLYaGSdfueSvMROpW0-zmwoNMWPtPk0Wfnryov9_tm6_zPn092VxTMR14Y2TPf9ElXfmBKU9R_TDUSd5eWmylzCOmKZdrdKLcGmtNCCsh5mVFIaQD2hZvHQdbulCjulKFDqKj2PAkN451q3ALxorf01w-JKiZC_DN0T2T0mjT8SB9rBJ-6wUTeThfczxb2_GhpRE4XrXDNmge5KCSgdGwScgyMe8jAWe9QX2n7zXGoT03SSHTcQlxiST9RjcUGmTibfzxgbBVpI9XsoF6ORPwLlELWqVgIeEUtCaNz-qSw92Chcy20UC5yb9bnVmVLRfopgTPeHikDiZTFdzaFPS69thTJhEAb6kdGkhbKX_ZOQ6-bfG-uTXdTwZ2CsN1qtpiLVemf7rO0R3qOJxx49cc3tf8APPPdbFmHPGvWu2O3pZ3J1WOrsy1ZXEHRPEdc49L0QLPAa8GaU8LGoLRzLyhr5AmiFyu4zYOSCuiptLex1hLSgodAj3XFk3daQsalJV8Qop25LunQ3gfGH8N3L4WoPKNc5DemPgLT0qoWzvgXLFxCmk0nbcLb-2cWGcLsAqMwKFyVV63cgNcxiRwxwBGbGy615DSVfvCDl_fSyqz3qCaS2yr9d9RKwno3o4IuCRplK5Ku4LLfr7nWZNH9tvwm4GZDyEr9tI4ptraZUqIMrlE7yy_ofGynQICYbYhESRPvYGtVM_fT=w1280-h226-no?authuser=0'
					width="100%">
			</td>
		</tr>
		<tr>
			<td style="background-color: #ecf0f1">
				<div style="color: #34495e; margin: 4% 10% 2%; text-align: justify;font-family: sans-serif">
					<h2 style="color: #e67e22; margin: 0 0 7px">Hi ${username}!</h2>
					<p style="margin: 2px; font-size: 15px">
						We are the largest home exchange community in the world.
						We send you this email as a thank you for joining our team ... enjoy it !!</p>
					<div style="width: 100%;margin:10px 0; display: inline-block;text-align: center">
						<img style="padding: 0; width: 100%; margin: 0px"
							src='https://lh3.googleusercontent.com/pNexJ0trT2PBJS75D0SiHkZyFdc476gixrdPQFWj4CIz_-zeFeq_16VlLM2_IdJ8F_ToaSWQ0bfVWLPLFbKapxg9mQEGowP4rZ20_XDTVMwVbqHf9vO4Su7Jy2VL-KCUtcuV7F7ql3tiW7lfELy-gPDHFT5IrUwQsgIhEfEpXrd4dCVYVG0LNAvcTZ_0R3FBsEBuuyP6z3nWLZTPF-Vv1RI2SLcKkRmXg0Qi3jxfHJpC1qq-AKFB41nmGn2U-jR30oIOr__CssD64YsNJUFKGE5weRKsiOXYkyak3lekXUvD5im5BdEEX3O8IGBJWDGUhbFZH7PsIHpW4LBkP3GKJrpg1NuZizatHN6Mi8KKQSYFVmppOY4nJglk-fvSCLwObGSCZHItmGO4L6WN-OvrpqGTM96NTX_O5uRQj1E6XKm-ix0e7uvBlPYhwZaN_T3zZILj6JnsmwsmcU2HpGjHzVzc4GZalBWD-GpePawiOQu2r5D0hfNiu9wgVb52gaNe9sauZq9OhcbsyrtG3L6Q2v1luqufbXqXgc1Kbjs1Fj0HM_lwZfFD7WWZHXseS3Y5hFMFpdywpO44QjgFHDGdp1ItIWrybk3oNlG_PeAcERPT1qsj8QJokL2Sv9YUIu6xU4rbL-rLbqmxcMhhjd0pN0bfOWIRe_qVUTTZgt8kK1KgCcStsO8bEQxdus4Oh9AfQnYPZXMcg2kfYuHJ9d9tdW_a=w1280-h92-no?authuser=0'>
					</div>
			</td>
		</tr>
	</table>
      </div>`,
    });
    console.log("email enviado!");
    res.status(200).json(sendEmail);
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
});

router.post("/reservationconfirmed", async (req, res) => {
  const { userMail, subject, text } = req.body;

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
  const { userMail } = req.body;

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

router.post("/reviewemail", async (req, res) => {
  const { userMail } = req.body;

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
