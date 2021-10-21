// const { howMuchDays } = require("../../../../client/src/utils/howMuchDays");
const { Order, User, Announcement } = require("../../db");
// const { FRONT, GMAIL_APP_EMAIL } = process.env;
// const { transporter } = require("../../utils/nodemailer");

const howMuchDays = (arrivealDate, departureDate) => {
  arrivealDate = arrivealDate.toString()
  departureDate = departureDate.toString()

  const f1 = arrivealDate.split("-");
  const f2 = departureDate.split("-");

  arrivealDate = Date.UTC(f1[0], f1[1], f1[2]);
  departureDate = Date.UTC(f2[0], f2[1], f2[2]);

  const dif = departureDate - arrivealDate;
  var days = Math.floor(dif / (1000 * 60 * 60 * 24));
  return days;
};

module.exports = async (req, res) => {
  const { orderId, newStatus } = req.body;
  
  //busco datos de la orden y usuario que la genero
  const order = await Order.findOne({
    where:{
      id:orderId
    },
    include:[User]
  })
  
  //busco datos del anuncio a quien esta destinada la orden
  const announc = await Announcement.findOne({
    where:{
      id: order.dataValues.announcementId
    }
  })

  try {
    if(newStatus !== "Completed"){
       const [ updated ] = await Order.update({status: newStatus}, { 
      where: {
        id: parseInt(orderId)
      }
    });
    }else{
     if(order.dataValues.type === "Pay with points"){
        console.log(order,"datos de orden") 
      const days = howMuchDays(order.dataValues.arrivealDate,order.dataValues.departureDate)
      console.log(days,"dias de alquiler")
      const pointsOrder = days * announc.dataValues.points //Hasta aca todo bien
      console.log(pointsOrder,"puntos")

      const userDecrPoints = await User.update({points: order.user.dataValues.points - pointsOrder},{
        where:{
          id: order.dataValues.userId
        }
      })

      const user2 = await User.findOne({
        where:{
          id:announc.dataValues.userId
        }
      })
      const userAddPoints = await User.update({points: user2.dataValues.points + pointsOrder},{
        where:{
          id: announc.dataValues.userId
        }
      })
      //Aca deberia mandar mail que los puntos fueron transferidos

      const [ updated ] = await Order.update({status: newStatus}, { 
        where: {
          id: parseInt(orderId)
        }
      });
     }else{
      const [ updated ] = await Order.update({status: newStatus}, { 
        where: {
          id: parseInt(orderId)
        }
      });
     }     
     

      //tengo que restar puntos al usuario que genero la orden

    }
   
    // console.log(updated,"updated")

    // if(!updated) {
    //   throw new Error(`Order ${orderId} not found / has not been modified`)
    // }

    // if(newStatus === 'completed') {

    //   const order = await Order.findOne({
    //     where: {
    //       id: parseInt(orderId)
    //     },
    //     include: [User]
    //   })

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
    console.log(error)
    // return res.status(409).send(error);
  }
};
