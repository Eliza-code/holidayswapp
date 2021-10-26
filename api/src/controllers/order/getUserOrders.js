const { Order } = require("../../db");

module.exports = async (req, res) => {
  const { userId } = req.params;

  try {
    const orders = await Order.findAll({
      where: { userId: userId },
      order: [["createdAt", "DESC"]],
    });

    return res.status(200).json(orders);
  } catch (error) {
    return res.status(409).send(error);
  }
};
