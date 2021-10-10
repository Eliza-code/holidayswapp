const {
    Order,
    Payment,
    User,
    Announcement
} = require("../../db");

module.exports = async (req, res) => {
    const { userId } = req.params;

    try {
        const order = await User.findAll({
            where: {id : userId}, // Usuario que busca reservar
            attributes: ['id', 'name', 'lastName'],
            include:  // Reservas
                [{
                    model: Order,
                    attributes: ['id', // id Orden de reserva
                                'userId',   // Usuario dueño de la Casa que se busca reservar
                                'announcementId' // Casa que se busca reservar
                   ],                                                 
                },
                {
                    model: Announcement,
                    where: {
                        model: Order,
                        where: {userId: userId}
                    }
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