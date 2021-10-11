const { Order } = require('../../db');

const getInfoOrders = async () => {
  try {
    await Order.create({
      status: "Pending",
      userId: 4,
      announcementId: 2,
      type: "Reciprocal",
      arrivealDate: "05-11-2020",
      departureDate: "20-11-2020",
      description: "Beautifull and classic Department"    
    })
    await Order.create({
      status: "Pending",
      userId: 4,
      announcementId: 23,
      type: "Reciprocal",
      arrivealDate: "05-11-2020",
      departureDate: "20-11-2020",
      description: "Beautifull and classic Department"    
    })
    await Order.create({
      status: "Pending",
      userId: 4,
      announcementId: 24,
      type: "Reciprocal",
      arrivealDate: "05-11-2020",
      departureDate: "20-11-2020",
      description: "Beautifull and classic Department"    
    })
    await Order.create({
      status: "Pending",
      userId: 21,
      announcementId: 23,
      type: "Reciprocal",
      arrivealDate: "05-11-2020",
      departureDate: "20-11-2020",
      description: "Beautifull and classic Department"    
    })
    await Order.create({
      status: "Pending",
      userId: 15,
      announcementId: 23,
      type: "Reciprocal",
      arrivealDate: "05-11-2020",
      departureDate: "20-11-2020",
      description: "Beautifull and classic Department"    
    })
    
    
    await Order.create({
      status: "Pending",
      userId: 17,
      announcementId: 7,
      type: "Reciprocal",
      arrivealDate: "05-11-2020",
      departureDate: "20-11-2020",
      description: "Beautifull and classic Department"     
    })
    await Order.create({
      status: "Pending",
      userId: 11,
      announcementId: 1,
      type: "Reciprocal",
      arrivealDate: "05-11-2020",
      departureDate: "20-11-2020",
      description: "Beautifull and classic Department"     
    })
    await Order.create({
      status: "Pending",
      userId: 10,
      announcementId: 20,
      type: "Reciprocal",
      arrivealDate: "05-11-2020",
      departureDate: "20-11-2020",
      description: "Beautifull and classic Department"     
    })
    await Order.create({
      status: "Pending",
      userId: 23,
      announcementId: 13,
      type: "Reciprocal",
      arrivealDate: "05-11-2020",
      departureDate: "20-11-2020",
      description: "Beautifull and classic Department"     
    })
    await Order.create({
      status: "Pending",
      userId: 25,
      announcementId: 15,
      type: "Reciprocal",
      arrivealDate: "05-11-2020",
      departureDate: "20-11-2020",
      description: "Beautifull and classic Department"    
    })
    await Order.create({
      status: "Pending",
      userId: 29,
      announcementId: 19,
      type: "Reciprocal",
      arrivealDate: "05-11-2020",
      departureDate: "20-11-2020",
      description: "Beautifull and classic Department"   
    })
    await Order.create({
      status: "Pending",
      userId: 9,
      announcementId: 20,
      type: "Reciprocal",
      arrivealDate: "05-11-2020",
      departureDate: "20-11-2020",
      description: "Beautifull and classic Department"     
    })
    await Order.create({
      status: "Pending",
      userId: 5,
      announcementId: 13,
      type: "Reciprocal",
      arrivealDate: "05-11-2020",
      departureDate: "20-11-2020",
      description: "Beautifull and classic Department"     
    })
    await Order.create({
      status: "Pending",
      userId: 6,
      announcementId: 28,
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