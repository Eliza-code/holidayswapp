const { Order, User, Announcement } = require('../../db');

module.exports = async (req, res) => {

  try {
      const orders = await Order.findAll({
          include: {
              model: User,
              model: Announcement
          }
      });

    if(orders) {
        return res.status(200).send(orders);
    } 

  } catch (error) {
    return res.status(409).send(error);
  }
};