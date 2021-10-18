const { BACK, FRONT } = process.env;
const { User, User_Points } = require('../../db')

// Traigo configuracion SFK de Mercado Pago
const mercadopago = require('../../utils/MercadoPago/configure')

//Ruta que genera la URL de MercadoPago


module.exports = async (req, res, next) => {
  const { userId } = req.params;

  try {
    //gets id and cart of current order
    const userPoints = await User.findOne({
      where: {
        id: userId
      },
      attributes: ["id", "points"],
      /* include: {
        model: User_Points,
        attributes: ["units", "unitPrice"],
      } */
    });
    //creates the preference object with all necessary data
    const preference = {
      items: [{
        title: "Points",
        unit_price: 10,
        quantity: 100,
        external_reference: `${userId}`,
      }],
      back_urls: {
        success: `${FRONT}/status/mercadopago/success`,
        failure: `${FRONT}/status/mercadopago/failure`,
        pending: `${FRONT}/status/mercadopago/pending`
      },
      auto_return: "all",
      // notification_url: `${BACK}/mercadopago/webhook?source_news=webhooks`
    }

    //sends a POST request to Mercadopago's API with the preference to be created
    const response = await mercadopago.preferences.create(preference);
    /*
      obtains the unique payment identifier provided by Mercadopago 
      to send to the client to be assigned to the payment step 
    */
    // const paymentId = response.body.id;

    /* await User.update({
      points: points + 
    },{
      where: {
        id: parseInt(orderId)
      }
    }); */

    //sends id back to client
    res.status(200).send(userPoints);
  } catch (err) {
    next(err);
    return res.status(409).send({error: err.message})
  }
}