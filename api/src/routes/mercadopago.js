const { Payment, Payment_detail, Points, User } = require('../db.js');
const server = require('express').Router();
const { transporter } = require( "../utils/emails/nodemailer" );

// SDK de Mercado Pago
const mercadopago = require('mercadopago');

const { ACCESS_TOKEN } = process.env;

//Agrega credenciales
mercadopago.configure({
  access_token: ACCESS_TOKEN
});

server.post('/', async (req, res) => {
  
  const { quantity, userId } = req.body
  const id = 1;
  const price = 1;
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
    }).catch((err) => next(err));


  let preference = {

    items: [{
      title: "Points",
      unit_price: 1,
      quantity: Number(quantity),
    }],
    back_urls: {
      failure: `https://holidayswapp.herokuapp.com/mercadopago/pagos?paymentId=${paymentId}&quantity=${quantity}&userEmail=${userId.email}`,
      success: `https://holidayswapp.herokuapp.com/mercadopago/pagos?paymentId=${paymentId}&quantity=${quantity}&userEmail=${userId.email}`,
      pending: `https://holidayswapp.herokuapp.com/mercadopago/pagos?paymentId=${paymentId}&quantity=${quantity}&userEmail=${userId.email}`,
    },
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
server.get("/pagos", async (req, res) => {
  const{ paymentId, quantity, userEmail }= req.query

 console.info("EN LA RUTA PAGOS ", req)
  const payment_id = req.query.payment_id
  const payment_status = req.query.status
  const merchant_order_id = req.query.merchant_order_id
  const quantityP = req.query.quantity
  const emailUser = req.query.userEmail
  
  console.log("payment_status ", payment_status)
  console.log("emailUser ", userEmail)
  if (payment_status === 'approved') {
    let email = await transporter.sendMail({
      from: '"HolidaySwApp" <holidayswapp@yahoo.com>',
      to: userEmail,
      subject: "online purchases",
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
  } else {
    console.log('El email no se envio')
  }
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

          return res.redirect(`https://holidayswapp-l1rpswsum-rojaseliza1491-gmailcom.vercel.app/paymentdetail?payment_status=${payment_status}&payment_id=${payment_id}&merchant_order_id=${merchant_order_id}&quantityPayment=${quantityP}&emailUser=${emailUser}`)
        })
        .catch((err) => {
          console.error('error al salvar', err)
          return res.redirect(`https://holidayswapp-d704idfur-rojaseliza1491-gmailcom.vercel.app/?error=${err}&where=al+salvar`)
        })
    })
    .catch(err => {
      console.error('error al buscar', err)
      return res.redirect(`https://holidayswapp-d704idfur-rojaseliza1491-gmailcom.vercel.app/?error=${err}&where=al+buscar`)
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