const { Order, Announcement, Payment, User } = require('../../db');

module.exports = async (req, res) => {
  const { orderId } = req.params;
  console.log("OrderId: " + orderId)

  try {
    const order = await Order.findAll({
      where: {
        id: orderId,
      },
      include: [{
        model: Announcement,
      }, {
        model: Payment
      }, {
        model: User,
        attributes: ['id', 'name', 'username', 'email']
      }]
    });

    if(!order[0]) {
      throw new Error(`Order with id: ${orderId} not found`)
    }

    return res.status(200).send(order);
  } catch (error) {
    return res.status(409).send(error);
  }
};