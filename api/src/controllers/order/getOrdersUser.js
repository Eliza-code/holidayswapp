const {
  Order,
  User,
} = require("../../db");

module.exports = async (req, res) => {
  const { userId } = req.params;
// Reservas hechas por el usuario
  try {
      const order = await Order.findOne ({
          where: {announcementId : userId}, // Usuario que busca hacer una reserva
          include: {
              model: User, // Usuario propietario de la casa a reservar
              attributes: [ 'id',
                            'name', 
                            'username',
                            'lastName', 
                            'email', 
                            'phoneNumber',
                            'profilePicture'
                          ]
          }
      })
      if (!order) {
          throw new Error(`User with id: ${userId} don't have any reserves created`);
      }
      return res.status(200).send(order);

  } catch (error) {
      return res.status(409).send(error);
  }
};