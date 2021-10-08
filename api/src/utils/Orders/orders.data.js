const { Order } = require('../../db');

const getInfoOrders = async () => {
  try {
    await Order.create({
      name: "Nadina",
      lastName: "Thunberg",
      paymentMethod: "MercadoPago",
      status: "created",
      userId: 4,
      announcementId: 15,
      date: "05-11-2020"    
    })
    await Order.create({
      name: "Ana",
      lastName: "Kiyulk",
      paymentMethod: "MercadoPago",
      status: "created",
      userId: 7,
      announcementId: 2,
      date: "05-11-2020"     
    })
    await Order.create({
      name: "Terri",
      lastName: "Boswell",
      paymentMethod: "MercadoPago",
      status: "created",
      userId: 1,
      announcementId: 12,
      date: "05-11-2020"     
    })
    await Order.create({
      name: "Yennifer",
      lastName: "Jonhson",
      paymentMethod: "MercadoPago",
      status: "created",
      userId: 10,
      announcementId: 8,
      date: "05-11-2020"     
    })
    await Order.create({
      name: "Sonja",
      lastName: "Boccelli",
      paymentMethod: "MercadoPago",
      status: "created",
      userId: 13,
      announcementId: 11,
      date: "05-11-2020"     
    })
    await Order.create({
      name: "Lonet",
      lastName: "Caucasso",
      paymentMethod: "MercadoPago",
      status: "created",
      userId: 15,
      announcementId: 3,
      date: "05-11-2020"    
    })
    await Order.create({
      name: "Joana",
      lastName: "Da Silva",
      paymentMethod: "MercadoPago",
      status: "created",
      userId: 19,
      announcementId: 1,
      date: "05-11-2020"   
    })
    await Order.create({
      name: "Paula",
      lastName: "Vallejos",
      paymentMethod: "MercadoPago",
      status: "created",
      userId: 20,
      announcementId: 2,
      date: "05-11-2020"     
    })
    await Order.create({
      name: "Michael",
      lastName: "Yakazulu",
      paymentMethod: "MercadoPago",
      status: "created",
      userId: 5,
      announcementId: 6,
      date: "05-11-2020"     
    })
    await Order.create({
      name: "Geerten",
      lastName: "Nutzra",
      paymentMethod: "MercadoPago",
      status: "created",
      userId: 6,
      announcementId: 7,
      date: "05-11-2020"     
    })
  } catch (erorr) {
    console.log(error);
  }
}
module.exports = {
  getInfoOrders
};