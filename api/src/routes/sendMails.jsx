const { Router } = require("express");
const express = require("express");
const nodemailer = require("nodemailer");
const router = Router();
router.use(express.json());
require("dotenv").config();
const { PASSWORD_EMAIL_NODEMAILER, USUARIO_EMAIL } = process.env;
const { User, Announcement } = require("../db");
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
      subject: "User Creation",
      //text: "Welcome, the user has been created successfully!",
      html: `<div>
      <table style="max-width: 600px; padding: 10px; margin:0 auto; border-collapse: collapse;">
      <tr>
        <td style="padding: 0">
          <a href='https://www.google.com.ar '>
            <img style="padding: 0; display: block"
            src='https://scontent.fsfn4-1.fna.fbcdn.net/v/t1.6435-9/245173308_10223868478132527_3967212138842875001_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=0debeb&_nc_ohc=t1bvGe2HAnIAX8IYz7K&_nc_ht=scontent.fsfn4-1.fna&oh=c13476a3994bd48877c7e4617adf7420&oe=6192EB53'
            width="100%">
          </a>
          </td>
      </tr>
      <tr>
        <td style="background-color: #ecf0f1">
          <div style="color: #34495e; margin: 4% 10% 2%; text-align: justify;font-family: sans-serif">
            <h2 style="color: #e67e22; margin: 0 0 7px">Hi ${username}!</h2>
            <p style="margin: 2px; font-size: 15px">
              We are the largest home exchange community in the world.
              We send you this email as a thank you for joining our team ... enjoy it !!</p>
            </td>
          </tr>
          <tr>
            <td style="padding: 0">
              <img style="padding: 0; display: block"
              src='https://scontent.fsfn4-1.fna.fbcdn.net/v/t1.6435-9/245162659_10223868478052525_7443222450681142250_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=0debeb&_nc_ohc=YAnef74H8zoAX9DESjk&_nc_ht=scontent.fsfn4-1.fna&oh=5bd680a88565b66f724a5e5f6163be37&oe=61964D27'
              width="100%">
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
  const {
    userId,
    announcementId,
    description,
    status,
    arrivealDate,
    departureDate,
    type,
  } = req.body;
  const user = await User.findByPk(userId);
  const annuncement = await Announcement.findByPk(announcementId);
  const userOwner = await User.findOne({
    where: {
      username: annuncement.owner,
    },
  });
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
      to: `${user.email}, ${userOwner.email}`,
      subject: "Reservation",
      //text: "Hi! Your reservation has been confirmed!",
      html: `<div>
       <table style="max-width: 600px; padding: 10px; margin:0 auto; border-collapse: collapse;">
		<tr>
			<td style="padding: 0">
				<a href='https://www.google.com.ar '>
					<img style="padding: 0; display: block"
						src='https://scontent.fsfn4-1.fna.fbcdn.net/v/t1.6435-9/245173308_10223868478132527_3967212138842875001_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=0debeb&_nc_ohc=t1bvGe2HAnIAX8IYz7K&_nc_ht=scontent.fsfn4-1.fna&oh=c13476a3994bd48877c7e4617adf7420&oe=6192EB53'
						width="100%">
				</a>
			</td>
		</tr>
		<tr>
			<td style="background-color: #ecf0f1">
				<div style="color: #34495e; margin: 4% 10% 2%; text-align: justify;font-family: sans-serif">
					<h2 style="color: #e67e22; margin: 0 0 7px">From my heart, thanks ${annuncement.owner} and ${user.username}!</h2>
					<p style="margin: 2px; font-size: 15px">
						We take this opportunity to thank you for choosing us. We know that there are many options on
						our website and we are honored that they have been chosen among you. We hope and believe that it
						will be a beautiful exchange, and who says, be good friends.
						We continue to improve our website, excellent customer service is our top priority.
					</p>
					<P style="text-align: center">
						THANK YOU SO MUCH!
					</P>
			</td>
		</tr>
		<tr>
			<td style="padding: 0">
				<img style="padding: 0; display: block"
					src='https://scontent.fsfn4-1.fna.fbcdn.net/v/t1.6435-9/245162659_10223868478052525_7443222450681142250_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=0debeb&_nc_ohc=YAnef74H8zoAX9DESjk&_nc_ht=scontent.fsfn4-1.fna&oh=5bd680a88565b66f724a5e5f6163be37&oe=61964D27'
					width="100%">
			</td>
		</tr>
	</table>
       </div>`,
    });
    console.log("email enviado!");
    res.status(200).json(email);
  } catch (error) {
    res.status(500).send(error);
    console.log("500", error);
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
