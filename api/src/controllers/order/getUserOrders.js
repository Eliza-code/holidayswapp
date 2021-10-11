const {
    Order,
    User,
    Announcement
} = require("../../db");

module.exports = async (req, res) => {
    const { userId } = req.params;
// Reservas hechas por el usuario
    try {
        const user = await User.findAll({
            where: {id : userId}, // Usuario que busca hacer una reserva
            attributes: ['name', 
                         'lastName', 
                         'email', 
                         'phoneNumber'
                        ],
            include:  // Reservas
                [{
                    model: Order,
                    attributes: [ 'id', // N° Orden de reserva
                                  'userId',  
                                  'announcementId', 
                                  'status', 
                                  'arrivealDate',
                                  'departureDate', 
                                  'type' 
                   ],
                   include: {
                    model: Announcement, // Casa a reservar
                    attributes: [ 'country',
                                  'state',
                                  'city',
                                  'adress',
                                  'type',
                                  'points',
                                  'description'
                    ],
                    include: {
                    model: User, // Usuario propietario de la casa a reservar
                    attributes: [ 
                                  'name', 
                                  'lastName', 
                                  'email', 
                                  'phoneNumber'
                                ]
                  }
                   },                                                  
                }],
        });
        if (!user) {
            throw new Error(`User with id: ${userId} don't have any reserves created`);
        }
        return res.status(200).send(user);

    } catch (error) {
        return res.status(409).send(error);
    }
};