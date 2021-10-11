const {
    Order,
    User,
    Announcement
} = require("../../db");

module.exports = async (req, res) => {
    const { userId } = req.params;
// Reservas recibidas por el Usuario en su anuncio
  try {
    const user = await User.findAll({
      where: { id: userId },  // Usuario que recibe peticion de reserva
      attributes: ['name', 
                   'lastName', 
                   'email', 
                   'phoneNumber'
                  ],
    })
    const announcement = await Announcement.findAll({
      where: { id: userId }, // Casa que recibe peticion de reserva
      attributes: [
                  'country',
                  'state',
                  'city',
                  'adress',
                  'type',
                  'points',
                  'description'
                 ],
          include: 
              {
                model: Order, // Reservas de la casa
                attributes: [ 'id', // N° de reserva
                              'userId', 
                              'announcementId', 
                              'status', 
                              'arrivealDate', 
                              'departureDate', 
                              'type' 
                            ],
              }
    })
    if(!user[0] || !announcement[0]) {
      throw new Error(`User with id: ${userId} don't have reservations in their posts`)
    }

    return res.status(200).send(user.concat(announcement));
  } catch (error) {
    return res.status(409).send(error);
  }
};