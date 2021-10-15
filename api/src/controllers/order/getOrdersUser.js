
const { Order, User, Announcement } = require("../../db");

module.exports = async (req, res) => {
  const { userId } = req.params;
  // Reservas hechas por el usuario
  try {
        // const order = await Order.findAll ({               CODIGO VIEJO DE MAURI Q NO ANDABA
        //     where: {announcementId : userId}, // Usuario que busca hacer una reserva
        //     include: {
        //         model: User, // Usuario propietario de la casa a reservar
        //         attributes: [ 'id',
        //                       'name',
        //                       'username',
        //                       'lastName',
        //                       'email',
        //                       'phoneNumber',
        //                       'profilePicture'
        //                     ]
        //     }
        // })
        // if (!order) {
        //     throw new Error(`User with id: ${userId} don't have any reserves created`);
        // }
        // return res.status(200).send(order);
    const announ = await Announcement.findAll({
      where: {
        userId: userId,
      },
    });
    // console.log(announ,"data anuncio")
    // console.log(announ[0].dataValues.id)


    const orders = await Order.findAll({
        where: {
          announcementId: announ[0].dataValues.id,
        },
      });

      
      // const data = []                //ESTO ES LO QUE INTENTE HACER PARA TRAERME EL USUARIO DESDE BACK
      // orders.map(async(elem) =>{
       
      //   const user = await User.findOne({
      //     where:{
      //       id:elem.userId
      //     }
      //   });
      //   console.log(elem.dataValues,user.dataValues,"data necesaria");  //IMPRIME ESTO PERO NO SIGUE EL CODIGO..
      //   let dato = {             
      //     order:elem.dataValues,
      //     user:user.dataValues
      //   };
      //   data.push(dato)
      // })

      // console.log(data)    //CONSOLOGEA UN ARRAY VACIO , NUNCA PUSHEA LA INFO, NI TAMPOCO LA RESPONDE

      // console.log(orders,"data ordenes")
    
    return res.send(orders); //MANDO SOLO LAS ORDENES, BUSCO EL ID USUARIO FRONT
  } catch (error) {
    console.log(error)
    // return res.status(409).send(error);
  }
};
