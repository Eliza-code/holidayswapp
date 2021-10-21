const { Order, User, Announcement} = require("../../db");

const howMuchDays = (arrivealDate, departureDate) => {
  arrivealDate = arrivealDate.toString()
  departureDate = departureDate.toString()

  let f1 = arrivealDate.split("T");
  let f2 = departureDate.split("T");

   f1 = f1[0].split("-");
  f2 = f2[0].split("-");

  arrivealDate = Date.UTC(f1[0], f1[1], f1[2]);
  departureDate = Date.UTC(f2[0], f2[1], f2[2]);

  const dif = departureDate - arrivealDate;
  var days = Math.floor(dif / (1000 * 60 * 60 * 24));
  return days;
};

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
  
  console.log( "*************createOrder: ", userId,
    announcementId,
    description,
    status,
    arrivealDate,
    departureDate,
    type)



  try {
    const user = await User.findByPk(userId);
    const announcement = await Announcement.findByPk(announcementId);

    const days = howMuchDays(arrivealDate,departureDate)
    const pointsOrder = parseInt(days) * parseInt(announcement.dataValues.points)
    // console.log(pointsOrder)

    if (!user) {
      throw new Error(`User with id: ${id} not found`);
    }

    const newOrder = {
      description,
      status,
      arrivealDate,
      departureDate,
      type,
      pointsOrder: pointsOrder
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