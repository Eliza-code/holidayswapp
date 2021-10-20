const { Order, User, Announcement} = require("../../db");

module.exports = async (req, res) => {
  const {
    userId,
    announcementId,
    description,
    status,
    arrivealDate,
    departureDate,
    type
  } = req.body;
  
  console.log( userId,
    announcementId,
    description,
    status,
    arrivealDate,
    departureDate,
    type)



  try {
    const user = await User.findByPk(userId);
    const announcement = await Announcement.findByPk(announcementId);

    if (!user) {
      throw new Error(`User with id: ${id} not found`);
    }

    const newOrder = {
      description,
      status,
      arrivealDate,
      departureDate,
      type
    };

    const order = await Order.create(newOrder);
    
    await user.addOrder(order.id);
    await order.setUser(user.id);

    await announcement.addOrder(order.id);
    await order.setAnnouncement(announcement.id);

    return res.status(201).send({orderId: order.id});

  } catch (error) {
    console.log(error)
    // return res.status(409).send(error);
  }
};