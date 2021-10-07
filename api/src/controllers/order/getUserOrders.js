const {
    Order,
    Payment,
    User,
    Announcement
} = require("../../db");

module.exports = async (req, res) => {
    const { userId } = req.params;

    try {
        const order = await Order.findAll({
            where: {userId},
            include: [
                {
                    model:  Announcement,
                    // attributes: ['id', 'name', 'username', 'email'],
                },
                {
                    model: Payment,
                },
                {
                    model: User,
                },
            ],
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