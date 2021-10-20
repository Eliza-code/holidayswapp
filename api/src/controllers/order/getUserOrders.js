const {
    Order,
    User,
    Announcement
} = require("../../db");

module.exports = async (req, res) => {
    const { userId } = req.params;
// Reservas hechas por el usuario
    try {
        const orders = await Order.findAll({
            where: {userId: userId}, 
            order:[['createdAt', 'DESC']]
        });
              
        return res.status(200).json(orders); //MANDO SOLO LAS ORDENES, BUSCO EL ID USUARIO FRONT

    } catch (error) {
        console.log(error)
        // return res.status(409).send(error);
    }
};