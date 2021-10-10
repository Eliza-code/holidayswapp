const { Order } = require('../../db');

const getInfoOrders = async () => {
  try {
    await Order.create({
      status: "pending",
      userId: 4,
      announcementId: 4,
      type: "Reciprocal",
      arrivealDate: "05-11-2020",
      departureDate: "20-11-2020",
      description: "Beautifull and classic Department"    
    })
    await Order.create({
      status: "pending",
      userId: 7,
      announcementId: 7,
      type: "Reciprocal",
      arrivealDate: "05-11-2020",
      departureDate: "20-11-2020",
      description: "Beautifull and classic Department"     
    })
    await Order.create({
      status: "pending",
      userId: 1,
      announcementId: 1,
      type: "Reciprocal",
      arrivealDate: "05-11-2020",
      departureDate: "20-11-2020",
      description: "Beautifull and classic Department"     
    })
    await Order.create({
      status: "pending",
      userId: 10,
      announcementId: 10,
      type: "Reciprocal",
      arrivealDate: "05-11-2020",
      departureDate: "20-11-2020",
      description: "Beautifull and classic Department"     
    })
    await Order.create({
      status: "pending",
      userId: 13,
      announcementId: 13,
      type: "Reciprocal",
      arrivealDate: "05-11-2020",
      departureDate: "20-11-2020",
      description: "Beautifull and classic Department"     
    })
    await Order.create({
      status: "pending",
      userId: 15,
      announcementId: 15,
      type: "Reciprocal",
      arrivealDate: "05-11-2020",
      departureDate: "20-11-2020",
      description: "Beautifull and classic Department"    
    })
    await Order.create({
      status: "pending",
      userId: 19,
      announcementId: 19,
      type: "Reciprocal",
      arrivealDate: "05-11-2020",
      departureDate: "20-11-2020",
      description: "Beautifull and classic Department"   
    })
    await Order.create({
      status: "pending",
      userId: 20,
      announcementId: 20,
      type: "Reciprocal",
      arrivealDate: "05-11-2020",
      departureDate: "20-11-2020",
      description: "Beautifull and classic Department"     
    })
    await Order.create({
      status: "pending",
      userId: 5,
      announcementId: 5,
      type: "Reciprocal",
      arrivealDate: "05-11-2020",
      departureDate: "20-11-2020",
      description: "Beautifull and classic Department"     
    })
    await Order.create({
      status: "pending",
      userId: 6,
      announcementId: 6,
      type: "Reciprocal",
      arrivealDate: "05-11-2020",
      departureDate: "20-11-2020",
      description: "Beautifull and classic Department"     
    })
  } catch (error) {
    console.log(error);
  }
}
module.exports = {
  getInfoOrders
};