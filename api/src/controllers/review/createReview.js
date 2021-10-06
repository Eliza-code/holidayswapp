const { Review } = require("../../db");

module.exports = async (req, res, next) => {
  let { annoucementId, userId, stars, description } = req.body;
  try {
    if (productId && userId && stars) {
      let review = await Review.findOne({
        where: { userId, productId },
      });

      review
        ? (review = await Review.update(
            { ...review, description, stars },
            { where: { userId, announcemetId } }
          ))
        : (review = await Review.create({
            annoucementId,
            userId,
            stars,
            description,
          }));

      return res.json({ success: "Review added successfully" });
    } else {
      throw new Error("Insufficient data");
    }
  } catch (err) {
    return res.send({ error: err.message }).status(409);
  }
};
