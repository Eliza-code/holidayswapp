const { Order, User, Announcement } = require("../../db");

module.exports = async (req, res) => {
  const { userId } = req.params;

  try {
    const announ = await Announcement.findAll({
      where: {
        userId: userId,
      },
    });

    const orders = await Order.findAll({
      where: {
        announcementId: announ[0].dataValues.id,
      },
      include: {
        model: User,
        attributes: ["id", "name", "username", "profilePicture"],
      },
      order: [["createdAt", "DESC"]],
    });

    return res.send(orders);
  } catch (error) {
    return res.status(409).send(error);
  }
};
