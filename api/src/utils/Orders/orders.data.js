const { Order } = require('../../db');

const getInfoOrders = async () => {
  try {
    await Order.create({
      status: "Pending",
      userId: 1,
      announcementId: 2,
      type: "Reciprocal",
      arrivealDate: "05-11-2020",
      departureDate: "20-11-2020",
      description: "Beautifull and classic Department"    
    })
    await Order.create({
      status: "Pending",
      userId: 3,
      announcementId: 4,
      type: "Reciprocal",
      arrivealDate: "05-11-2020",
      departureDate: "20-11-2020",
      description: "Beautifull and classic Department"    
    })
    await Order.create({
      status: "Pending",
      userId: 5,
      announcementId: 6,
      type: "Reciprocal",
      arrivealDate: "05-11-2020",
      departureDate: "20-11-2020",
      description: "Beautifull and classic Department"    
    })
    await Order.create({
      status: "Pending",
      userId: 7,
      announcementId: 8,
      type: "Reciprocal",
      arrivealDate: "05-11-2020",
      departureDate: "20-11-2020",
      description: "Beautifull and classic Department"    
    })
    await Order.create({
      status: "Pending",
      userId: 9,
      announcementId: 10,
      type: "Reciprocal",
      arrivealDate: "05-11-2020",
      departureDate: "20-11-2020",
      description: "Beautifull and classic Department"    
    })
    
    
    await Order.create({
      status: "Pending",
      userId: 11,
      announcementId: 12,
      type: "Reciprocal",
      arrivealDate: "05-11-2020",
      departureDate: "20-11-2020",
      description: "Beautifull and classic Department"     
    })
    await Order.create({
      status: "Pending",
      userId: 13,
      announcementId: 14,
      type: "Reciprocal",
      arrivealDate: "05-11-2020",
      departureDate: "20-11-2020",
      description: "Beautifull and classic Department"     
    })
    await Order.create({
      status: "Pending",
      userId: 15,
      announcementId: 16,
      type: "Reciprocal",
      arrivealDate: "05-11-2020",
      departureDate: "20-11-2020",
      description: "Beautifull and classic Department"     
    })
    await Order.create({
      status: "Pending",
      userId: 17,
      announcementId: 18,
      type: "Reciprocal",
      arrivealDate: "05-11-2020",
      departureDate: "20-11-2020",
      description: "Beautifull and classic Department"     
    })
    await Order.create({
      status: "Pending",
      userId: 19,
      announcementId: 20,
      type: "Reciprocal",
      arrivealDate: "05-11-2020",
      departureDate: "20-11-2020",
      description: "Beautifull and classic Department"    
    })
    await Order.create({
      status: "Pending",
      userId: 21,
      announcementId: 22,
      type: "Reciprocal",
      arrivealDate: "05-11-2020",
      departureDate: "20-11-2020",
      description: "Beautifull and classic Department"   
    })
    await Order.create({
      status: "Pending",
      userId: 23,
      announcementId: 24,
      type: "Reciprocal",
      arrivealDate: "05-11-2020",
      departureDate: "20-11-2020",
      description: "Beautifull and classic Department"     
    })
    await Order.create({
      status: "Pending",
      userId: 25,
      announcementId: 26,
      type: "Reciprocal",
      arrivealDate: "05-11-2020",
      departureDate: "20-11-2020",
      description: "Beautifull and classic Department"     
    })
    await Order.create({
      status: "Pending",
      userId: 27,
      announcementId: 28,
      type: "Reciprocal",
      arrivealDate: "05-11-2020",
      departureDate: "20-11-2020",
      description: "Beautifull and classic Department"     
    })
    await Order.create({
      status: "Pending",
      userId: 29,
      announcementId: 30,
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