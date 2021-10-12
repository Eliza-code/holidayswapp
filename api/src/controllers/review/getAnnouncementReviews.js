const { Review ,  User } = require('../../db');

module.exports = async (req, res) => {
    const { id } = req.params;
    try {
      if (id) {
        const review = await Review.findAll({
          where: { announcementId: id },
          include: {
            model: User,
            attributes: ["username"],
          },
        });
        return res.status(200).json(review);
      }
    } catch (err) {
      return res.send({ error: err.message }).status(409);
    }
  }
