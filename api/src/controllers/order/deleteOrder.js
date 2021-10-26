const { Order } = require("../../db");

module.exports = async (req, res) => {
  const { orderId, force } = req.body;

  try {
    const destroyQuery = {
      where: {
        id: orderId,
      },
    };

    if (force) {
      destroyQuery.force = true;
    }

    const deleted = await Order.destroy(destroyQuery);

    if (!deleted) {
      throw new Error(`Order with id: ${orderId} not found`);
    }

    return res.status(200).send(`Order ${orderId} successfully deleted`);
  } catch (err) {
    return res.status(409).send(error);
  }
};
