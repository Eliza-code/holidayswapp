
const { Order, User, Announcement } = require("../../db");
//const nodemailer = require("nodemailer");
const { transporter } = require( "../../utils/emails/nodemailer" );

// const { FRONT, GMAIL_APP_EMAIL } = process.env;


// const howMuchDays = (arrivealDate, departureDate) => {
//   arrivealDate = arrivealDate.toString();
//   departureDate = departureDate.toString();

//   const f1 = arrivealDate.split("-");
//   const f2 = departureDate.split("-");

//   arrivealDate = Date.UTC(f1[0], f1[1], f1[2]);
//   departureDate = Date.UTC(f2[0], f2[1], f2[2]);

//   const dif = departureDate - arrivealDate;
//   var days = Math.floor(dif / (1000 * 60 * 60 * 24));
//   return days;
// };

module.exports = async (req, res) => {
  const { orderId, newStatus } = req.body;

  //busco datos de la orden y usuario que la genero
  const order = await Order.findOne({
    where: {
      id: orderId,
    },
    include: [User],
  });

  //busco datos del anuncio a quien esta destinada la orden
  const announc = await Announcement.findOne({
    where: {
      id: order.dataValues.announcementId,
    },
  });

  try {
    if (newStatus !== "Completed") {
      const [updated] = await Order.update(
        { status: newStatus },
        {
          where: {
            id: parseInt(orderId),
          },
        }
      );
    } else {
      if (order.dataValues.type === "Pay with points") {
        console.log(order, "datos de orden");
        // const days = howMuchDays(
        //   order.dataValues.arrivealDate,
        //   order.dataValues.departureDate
        // );
        // console.log(days, "dias de alquiler");
        // const pointsOrder = days * announc.dataValues.points; //Hasta aca todo bien
        // console.log(pointsOrder, "puntos");

        const userDecrPoints = await User.update(
          { points: parseInt(order.user.dataValues.points) - parseInt(order.dataValues.pointsOrder) },
          {
            where: {
              id: order.dataValues.userId,
            },
          }
        );

        const user2 = await User.findOne({
          where: {
            id: announc.dataValues.userId,
          },
        });
        
        const userAddPoints = await User.update(
          { points: parseInt(user2.dataValues.points) + parseInt(order.dataValues.pointsOrder) },
          {
            where: {
              id: announc.dataValues.userId,
            },
          }
        );
        //Aca deberia mandar mail que los puntos fueron transferidos
        transporter.sendMail({
              from: '"HolidaySwApp" <holidayswapp@yahoo.com>',
              to:  `${order.user.dataValues.email}, ${user2.dataValues.email}`,
              subject: "Reservation",
              //text: "The products are dispatched, Thank you!", // plain text body
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
					<h2 style="color: #e67e22; margin: 0 0 7px">From my heart, thanks ${order.user.dataValues.username} and ${user2.dataValues.username}!</h2>
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
              </div>`
            });

        const [updated] = await Order.update(
          { status: newStatus },
          {
            where: {
              id: parseInt(orderId),
            },
          }
        );
      } else {
        const [updated] = await Order.update(
          { status: newStatus },
          {
            where: {
              id: parseInt(orderId),
            },
          }
        );
      }
    }

    // if(!updated) {
    //   throw new Error(`Order ${orderId} not found / has not been modified`)
    // }

    //   transporter.sendMail({
    //     from: `"On The Rocks" <${GMAIL_APP_EMAIL}>`, // sender address
    //     to: order.user.email, // list of receivers
    //     subject: "Order completed", // Subject line
    //     text: "The products are dispatched, Thank you!", // plain text body
    //     html: `<b>click on the link to see your order: <a href="${FRONT}/order/${orderId}"> HERE </a> </b>`, // html body
    //   });
    // }

    return res.status(200).send(`Order ${orderId} successfully updated`);
  } catch (error) {
    console.log(error);
    // return res.status(409).send(error);
  }
};
