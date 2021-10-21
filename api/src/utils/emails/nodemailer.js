const nodemailer = require("nodemailer");
const { PASSWORD_EMAIL_NODEMAILER, USUARIO_EMAIL } = process.env;


const transporter = nodemailer.createTransport({
    host: "smtp.mail.yahoo.com",
    port: 465,
    secure: false,
    service: "yahoo",
    auth: {
        user: USUARIO_EMAIL,
        pass: PASSWORD_EMAIL_NODEMAILER,
    },    
})
module.exports = { transporter };