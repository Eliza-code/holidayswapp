const { Order } = require("../../db");

const getInfoOrders = async () => {
  try {
    await Order.create({
      status: "Pending",
      userId: 1,
      announcementId: 2,
      type: "Reciprocal",
      arrivealDate: "2021-01-01",
      departureDate: "2021-01-15",
      description: "Beautifull and classic Department",
    });
    await Order.create({
      status: "Pending",
      userId: 3,
      announcementId: 4,
      type: "Reciprocal",
      arrivealDate: "2021-02-01",
      departureDate: "2021-02-15",
      description: "Beautifull and classic Department",
    });
    await Order.create({
      status: "Pending",
      userId: 5,
      announcementId: 6,
      type: "Reciprocal",
      arrivealDate: "2021-03-10",
      departureDate: "2021-03-25",
      description: "Beautifull and classic Department",
    });
    await Order.create({
      status: "Pending",
      userId: 7,
      announcementId: 8,
      type: "Reciprocal",
      arrivealDate: "2021-04-05",
      departureDate: "2021-04-20",
      description: "Beautifull and classic Department",
    });
    await Order.create({
      status: "Pending",
      userId: 9,
      announcementId: 10,
      type: "Reciprocal",
      arrivealDate: "2021-05-01",
      departureDate: "2021-05-15",
      description: "Beautifull and classic Department",
    });

    await Order.create({
      status: "Pending",
      userId: 11,
      announcementId: 12,
      type: "Reciprocal",
      arrivealDate: "2021-06-20",
      departureDate: "2021-07-05",
      description: "Beautifull and classic Department",
    });
    await Order.create({
      status: "Pending",
      userId: 13,
      announcementId: 14,
      type: "Reciprocal",
      arrivealDate: "2021-07-05",
      departureDate: "2021-07-20",
      description: "Beautifull and classic Department",
    });
    await Order.create({
      status: "Pending",
      userId: 15,
      announcementId: 16,
      type: "Reciprocal",
      arrivealDate: "2021-08-01",
      departureDate: "2021-08-15",
      description: "Beautifull and classic Department",
    });
    await Order.create({
      status: "Pending",
      userId: 17,
      announcementId: 18,
      type: "Reciprocal",
      arrivealDate: "2021-09-10",
      departureDate: "2021-09-25",
      description: "Beautifull and classic Department",
    });
    await Order.create({
      status: "Pending",
      userId: 19,
      announcementId: 20,
      type: "Reciprocal",
      arrivealDate: "2021-09-05",
      departureDate: "2021-09-20",
      description: "Beautifull and classic Department",
    });
    await Order.create({
      status: "Pending",
      userId: 21,
      announcementId: 22,
      type: "Reciprocal",
      arrivealDate: "2021-08-01",
      departureDate: "2021-08-15",
      description: "Beautifull and classic Department",
    });
    await Order.create({
      status: "Pending",
      userId: 23,
      announcementId: 24,
      type: "Reciprocal",
      arrivealDate: "2021-07-10",
      departureDate: "2021-07-25",
      description: "Beautifull and classic Department",
    });
    await Order.create({
      status: "Pending",
      userId: 25,
      announcementId: 26,
      type: "Reciprocal",
      arrivealDate: "2021-06-05",
      departureDate: "2021-06-20",
      description: "Beautifull and classic Department",
    });
    await Order.create({
      status: "Pending",
      userId: 27,
      announcementId: 28,
      type: "Reciprocal",
      arrivealDate: "2021-05-10",
      departureDate: "2021-05-25",
      description: "Beautifull and classic Department",
    });
    await Order.create({
      status: "Pending",
      userId: 29,
      announcementId: 30,
      type: "Reciprocal",
      arrivealDate: "2021-04-01",
      departureDate: "2021-04-15",
      description: "Beautifull and classic Department",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getInfoOrders,
};
