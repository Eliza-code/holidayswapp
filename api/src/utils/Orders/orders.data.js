const { Order } = require('../../db');

const getInfoOrders = async () => {
  try {
    await Order.create({
      name: "Nadina",
      lastName: "Thunberg",
      paymentMethod: "MercadoPago",
      status: "pending",
      userId: 4,
      announcementId: 15,
      date: "05-11-2020"    
    })
    await Order.create({
      name: "Ana",
      lastName: "Kiyulk",
      paymentMethod: "MercadoPago",
      status: "pending",
      userId: 7,
      announcementId: 2,
      date: "05-11-2020"     
    })
    await Order.create({
      name: "Terri",
      lastName: "Boswell",
      paymentMethod: "MercadoPago",
      status: "pending",
      userId: 1,
      announcementId: 12,
      date: "05-11-2020"     
    })
    await Order.create({
      name: "Yennifer",
      lastName: "Jonhson",
      paymentMethod: "MercadoPago",
      status: "pending",
      userId: 10,
      announcementId: 8,
      date: "05-11-2020"     
    })
    await Order.create({
      name: "Sonja",
      lastName: "Boccelli",
      paymentMethod: "MercadoPago",
      status: "pending",
      userId: 13,
      announcementId: 11,
      date: "05-11-2020"     
    })
    await Order.create({
      name: "Lonet",
      lastName: "Caucasso",
      paymentMethod: "MercadoPago",
      status: "pending",
      userId: 15,
      announcementId: 3,
      date: "05-11-2020"    
    })
    await Order.create({
      name: "Joana",
      lastName: "Da Silva",
      paymentMethod: "MercadoPago",
      status: "pending",
      userId: 19,
      announcementId: 1,
      date: "05-11-2020"   
    })
    await Order.create({
      name: "Paula",
      lastName: "Vallejos",
      paymentMethod: "MercadoPago",
      status: "pending",
      userId: 20,
      announcementId: 2,
      date: "05-11-2020"     
    })
    await Order.create({
      name: "Michael",
      lastName: "Yakazulu",
      paymentMethod: "MercadoPago",
      status: "pending",
      userId: 5,
      announcementId: 6,
      date: "05-11-2020"     
    })
    await Order.create({
      name: "Geerten",
      lastName: "Nutzra",
      paymentMethod: "MercadoPago",
      status: "pending",
      userId: 6,
      announcementId: 7,
      date: "05-11-2020"     
    })
  } catch (error) {
    console.log(error);
  }
}
module.exports = {
  getInfoOrders
};