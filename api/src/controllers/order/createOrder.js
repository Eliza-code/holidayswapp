const { Order, User, Announcement} = require("../../db");

module.exports = async (req, res) => {
  const {
    userId,
    announcementId,
    name,
    lastName,
    city,
    paymentMethod,
    status,
    points,
    date
  } = req.body;

  try {
    const user = await User.findByPk(userId);
    const announcement = await Announcement.findByPk(announcementId);

    if (!user) {
      throw new Error(`User with id: ${id} not found`);
    }

    const newOrder = {
        name,
        lastName,
        city,
        paymentMethod,
        status,
        points,
        date
    };

    const order = await Order.create(newOrder);
    
    await user.addOrder(order.id);
    await order.setUser(user.id);

    await announcement.addOrder(order.id);
    await order.setAnnouncement(announcement.id);

    return res.status(201).send({orderId: order.id});

  } catch (error) {
    return res.status(409).send(error);
  }
};