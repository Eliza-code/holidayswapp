const { Order, User, Announcement } = require('../../db');

module.exports = async (req, res) => {

  try {
      const orders = await Order.findAll({
          include: [{
              model: User, // Usuario propietario de la casa que se busca reservar
              attributes: ['id', 
                           'name', 
                           'lastName', 
                           'email', 
                           'phoneNumber']
          },
          { 
              model: Announcement,
              attributes: ['id', // Casa o Apartamento que se busca reservar
                           'country',
                           'state',
                           'city',
                           'adress',
                           'points',
                           'description']
          }]
      });

    if(orders) {
        return res.status(200).send(orders);
    } 

  } catch (error) {
    return res.status(409).send(error);
  }
};