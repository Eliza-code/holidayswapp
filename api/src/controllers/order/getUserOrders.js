const {
    Order,
    User,
    Announcement
} = require("../../db");

module.exports = async (req, res) => {
    const { userId } = req.params;

    try {
        const order = await User.findAll({
            where: {id : userId}, // Usuario que busca recibe peticion de reserva
            attributes: ['name', 
                         'lastName', 
                         'email', 
                         'phoneNumber'
                        ],
            include:  // Reservas
                [{
                    model: Order,
                    attributes: [ 'id', // id Orden de reserva
                                  'userId',   // Usuario dueño de la Casa que se busca reservar
                                  'announcementId', // Casa que se busca reservar
                                  'status', // estado de la reserva
                                  'arrivealDate', // Fecha de llegada
                                  'departureDate', // Fecha de salida
                                  'type' // Intercambio o Pago por puntos
                   ],                                                 
                },
                {
                    model: Announcement,
                    attributes: [ 'country',
                                  'state',
                                  'city',
                                  'adress',
                                  'type',
                                  'points',
                                  'description'
                    ]
                }],
        });

        // console.log(order);

        if (!order) {
            throw new Error(`Order with id: ${orderId} not found`);
        }
        return res.status(200).send(order);

    } catch (error) {
        return res.status(409).send(error);
    }
};