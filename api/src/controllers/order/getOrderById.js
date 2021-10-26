const { Order, Announcement, User } = require("../../db");

module.exports = async (req, res) => {
  const { orderId } = req.params;

  try {
    const order = await Order.findAll({
      where: {
        id: orderId,
      },
      include: [
        {
          model: Announcement,
          attributes: [
            "country",
            "state",
            "city",
            "adress",
            "type",
            "points",
            "description",
          ],
        },
        {
          model: User,
          attributes: ["name", "lastName", "email", "phoneNumber"],
        },
      ],
    });

    if (!order[0]) {
      throw new Error(`Order with id: ${orderId} not found`);
    }

    return res.status(200).send(order);
  } catch (error) {
    return res.status(409).send(error);
  }
};
