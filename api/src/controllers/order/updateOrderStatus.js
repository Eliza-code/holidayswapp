const { Order, User } = require("../../db");
const nodemailer = require("nodemailer");
const { transporter } = require( "../../utils/emails/nodemailer" );

// const { FRONT, GMAIL_APP_EMAIL } = process.env;


module.exports = async (req, res) => {
  const { orderId, newStatus } = req.body;
  
  try {
    const [ updated ] = await Order.update({status: newStatus}, { 
      where: {
        id: parseInt(orderId)
      }
    });

    if(!updated) {
      throw new Error(`Order ${orderId} not found / has not been modified`)
    }

    if(newStatus === 'completed') {

      const order = await Order.findOne({
        where: {
          id: parseInt(orderId)
        },
        include: [User]
      })
      
      // console.log("------------estoy en el back ORDEr: ", order.user.email);
      // console.log("status en el back: ", newStatus);


      // transporter.sendMail({
      //   from: '"HolidaySwApp" <holidayswapp@yahoo.com>',
      //   to: order.user.email, 
      //   subject: "Order completed",
      //   //text: "The products are dispatched, Thank you!"
      //   html: `<table style="max-width: 600px; padding: 10px; margin:0 auto; border-collapse: collapse;">
      //   <tr>
      //     <td style="padding: 0">
      //       <a href='https://www.google.com.ar '>
      //         <img style="padding: 0; display: block"
      //         src='https://scontent.fsfn4-1.fna.fbcdn.net/v/t1.6435-9/245173308_10223868478132527_3967212138842875001_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=0debeb&_nc_ohc=t1bvGe2HAnIAX8IYz7K&_nc_ht=scontent.fsfn4-1.fna&oh=c13476a3994bd48877c7e4617adf7420&oe=6192EB53'
      //         width="100%">
      //       </a>
      //       </td>
      //   </tr>
      //   <tr>
      //     <td style="background-color: #ecf0f1">
      //       <div style="color: #34495e; margin: 4% 10% 2%; text-align: justify;font-family: sans-serif">
      //         <h2 style="color: #e67e22; margin: 0 0 7px">Hi ${username}!</h2>
      //         <p style="margin: 2px; font-size: 15px">
      //           This is a resounding success! Thank you very much for trusting us!</p>
      //         </td>
      //       </tr>
      //       <tr>
      //         <td style="padding: 0">
      //           <img style="padding: 0; display: block"
      //           src='https://scontent.fsfn4-1.fna.fbcdn.net/v/t1.6435-9/245162659_10223868478052525_7443222450681142250_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=0debeb&_nc_ohc=YAnef74H8zoAX9DESjk&_nc_ht=scontent.fsfn4-1.fna&oh=5bd680a88565b66f724a5e5f6163be37&oe=61964D27'
      //           width="100%">
      //         </td>
      //       </tr>
      //     </table>`
      // });

      

    }

    return res.status(200).send(`Order ${orderId} successfully updated`);
  } catch (error) {
    console.log(error)
    // return res.status(409).send(error);
  }
};
