const { Order, User } = require("../../db");
// const { FRONT, GMAIL_APP_EMAIL } = process.env;
// const { transporter } = require("../../utils/nodemailer");

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

    //   transporter.sendMail({
    //     from: `"On The Rocks" <${GMAIL_APP_EMAIL}>`, // sender address
    //     to: order.user.email, // list of receivers
    //     subject: "Order completed", // Subject line
    //     text: "The products are dispatched, Thank you!", // plain text body
    //     html: `<b>click on the link to see your order: <a href="${FRONT}/order/${orderId}"> HERE </a> </b>`, // html body
    //   });
    }

    return res.status(200).send(`Order ${orderId} successfully updated`);
  } catch (error) {
    return res.status(409).send(error);
  }
};
