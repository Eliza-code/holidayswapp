const { Review } = require("../../db");

module.exports = async (req, res) => {
  const { id } = req.params;
  const review = req.body;

  try {
    await Review.update(review, {
      where: {
        id: id,
      },
    });
    return res.json({ changed: true });
  } catch (err) {
    return res.send({ error: err.message }).status(409);
  }
};
