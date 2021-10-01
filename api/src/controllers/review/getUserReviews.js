const { Review } = require('../../db');

module.exports = async (req, res) => {
    const { id } = req.params;
    try {
      if (id) {
        const review = await Review.findAll({
          where: { userId: id },
        });
        return res.json(review);
      }
    } catch (err) {
      return res.send({ error: err.message }).status(409);
    }
  }
