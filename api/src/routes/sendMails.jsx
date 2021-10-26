const { Router } = require("express");
const express = require("express");
const nodemailer = require("nodemailer");
const router = Router();
router.use(express.json());
require("dotenv").config();
const { PASSWORD_EMAIL_NODEMAILER, USUARIO_EMAIL } = process.env;
const { User, Announcement } = require("../db");

router.post("/confirmAuth", async (req, res) => {
  const { username, email } = req.body;

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

    res.status(200).json(sendEmail);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/reservationconfirmed", async (req, res) => {
  const { userId, announcementId } = req.body;
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
					<h2 style="color: #e67e22; margin: 0 0 7px">Everything is a success!</h2>
					<p style="margin: 2px; font-size: 15px">
						As part of our commitment to generating social well-being in the communities where we operate,
						we promote healthy exchanges by combining a beautiful experience and activities that you
						remember at all stages of your life.
						We do this in order to improve the quality of our communities, generating more and more users
						happy with your service.
					</p>
					<P style="text-align: center">
						THANK YOU VERY MUCH REALLY!
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

    res.status(200).json(email);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
