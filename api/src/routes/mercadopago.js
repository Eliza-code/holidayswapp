const { Payment, Payment_detail, Points, User } = require('../db.js');
const server = require('express').Router();

// SDK de Mercado Pago
const mercadopago = require('mercadopago');

const { ACCESS_TOKEN } = process.env;

//Agrega credenciales
mercadopago.configure({
  access_token: ACCESS_TOKEN
});


//Ruta que genera la URL de MercadoPago
server.get("/", (req, res, next) => {

  const id_payment = 1

  //Cargamos el carrido de la bd
  const carrito = [
    { title: "Points", quantity: 111, price: 1 }
  ]

  const items_ml = carrito.map(i => ({
    title: i.title,
    unit_price: i.price,
    quantity: i.quantity,
  }))

  // Crea un objeto de preferencia
  let preference = {
    items: [{
      title: items_ml.title,
      unit_price: items_ml.price,
      quantity: items_ml.quantity,
    }],
    external_reference: `${id_payment}`,
    payment_methods: {
      excluded_payment_types: [
        {
          id: "atm"
        }
      ],
      installments: 3  //Cantidad máximo de cuotas
    },
    back_urls: {
      success: 'http://localhost:3001/mercadopago/pagos',
      failure: 'http://localhost:3001/mercadopago/pagos',
      pending: 'http://localhost:3001/mercadopago/pagos',
    },
  };

  mercadopago.preferences.create(preference)

    .then(function (response) {
      console.info('respondio')
      //Este valor reemplazará el string"<%= global.id %>" en tu HTML
      global.id = response.body.id;
      console.log(response.body)
      res.json({ id: global.id });
    })
    .catch(function (error) {
      console.log(error);
    })
})



server.post('/', async (req, res) => {

  const { quantity, userId } = req.body
  const id = 1;
  const price = 1;

  console.log("req.body.QUANTITY ", quantity)
  console.log("req.body.USERID ", userId)
  console.log("req.body.STATUS")

  console.log('arreglo que viene por body', req.body)

  const payment = await Payment.create({ userId: userId.id })
  const pointsId = await Points.findByPk(id)
  console.log("POINTS", pointsId)
  const paymentId = payment.dataValues.id
  const paymentDetail = await Payment_detail.create({
    paymentId: paymentId,
    pointId: pointsId.dataValues.id,
    quantity: Number(quantity),
    price: price,
  })
    .then((secondResponse) => {
      //nos da el arreglo creado
      const quantity = secondResponse.dataValues.quantity;
      const pointId = secondResponse.dataValues.pointId;
      Points.decrement({ stock: quantity }, { where: { id: pointId } });
      User.increment({ points: quantity }, { where: { id: userId.id } });
    })

   /*  .then((_) => res.send("OK")) */
    .catch((err) => next(err));


  let preference = {

    items: [{
      title: "Points",
      unit_price: 1,
      quantity: Number(quantity),
    }],
    /*  shipments:{
       cost: shipping
     }, */
    back_urls: {
      failure: `http://localhost:3001/mercadopago/pagos/${paymentId}`,
      success: `http://localhost:3001/mercadopago/pagos/${paymentId}`,
      pending: `http://localhost:3001/mercadopago/pagos/${paymentId}`,
    },
    /* auto_return: 'approved', */

  };
  mercadopago.preferences.create(preference)

    .then(function (response) {
      //trabajar con la respuesta de MP
      console.log("response.body",response.body)
      global.id = response.body.id;
      res.send(response.body.init_point)
    }).catch(function (error) {
      console.log(error);
    });

})

//Ruta que recibe la información del pago
server.get("/pagos/:id", (req, res) => {
  const paymentId = req.params.id

  console.info("EN LA RUTA PAGOS ", req)
  const payment_id = req.query.payment_id
  const payment_status = req.query.status
  const merchant_order_id = req.query.merchant_order_id
  

  //Aquí edito el status de mi orden
  Payment.findByPk(paymentId)
    .then((order) => {
      order.payment_status = payment_status
      order.payment_id = payment_id
      order.merchant_order_id = merchant_order_id
      order.status = "completed"
      console.info('Salvando order')
      order.save()
        .then((_) => {
          console.info('redirect success')

          return res.redirect("http://localhost:3000/paymentdetail")
        })
        .catch((err) => {
          console.error('error al salvar', err)
          return res.redirect(`http://localhost:3000/?error=${err}&where=al+salvar`)
        })
    })
    .catch(err => {
      console.error('error al buscar', err)
      return res.redirect(`http://localhost:3000/?error=${err}&where=al+buscar`)
    })

  //proceso los datos del pago 
  //redirijo de nuevo a react con mensaje de exito, falla o pendiente
})


//Busco información de una orden de pago
server.get("/pagos/:id", (req, res) => {
  const mp = new mercadopago(ACCESS_TOKEN)
  const id = req.params.id
  console.info("Buscando el id", id)
  mp.get(`/v1/payments/search`, { 'status': 'pending' }) //{"external_reference":id})
    .then(resultado => {
      console.info('resultado', resultado)
      res.json({ "resultado": resultado })
    })
    .catch(err => {
      console.error('No se consulto:', err)
      res.json({
        error: err
      })
    })
})

module.exports = server;