const { Order, User, Announcement } = require("../../db");

module.exports = async (req, res) => {
  try {
    const orders = await Order.findAll({
      include: [
        {
          model: User,
          attributes: ["id", "name", "lastName", "email", "phoneNumber"],
        },
        {
          model: Announcement,
          attributes: [
            "id",
            "country",
            "state",
            "city",
            "adress",
            "points",
            "description",
          ],
        },
      ],
    });

    if (orders) {
      return res.status(200).send(orders);
    }
  } catch (error) {
    return res.status(409).send(error);
  }
};
