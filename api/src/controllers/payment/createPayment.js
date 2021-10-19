const { Payment, Payment_detail, Points, User } = require("../../db");

module.exports = (req, res, next) => {
  const { userId, quantity } = req.body;

  const id = 1;
  const price = 1;
  

  Payment.create({
    userId: userId,
  }).then((response) => {
    Promise.all(
      [{ id,  price, quantity }].map((elem) => {
        Points.findByPk(elem.id)
          .then((points) => {
            const paymentId = response.dataValues.id; //nos da el id de payment

            return Payment_detail.create({
              paymentId: paymentId,
              pointId: points.id,
              quantity: elem.quantity,
              price: points.price,
            });
          })
          .then((secondResponse) => {
            //nos da el arreglo creado
            const quantity = secondResponse.dataValues.quantity;
            const pointId = secondResponse.dataValues.pointId;
            Points.decrement({ stock: quantity }, { where: { id: pointId } });
            User.increment({ points: quantity }, { where: { id: userId } });
          });
      })
    )
      .then((_) => res.send("OK"))
      .catch((err) => next(err));
  });
};
