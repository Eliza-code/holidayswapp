const { Review } = require("../../db");

module.exports = async (req, res, next) => {
  let { userId, announcementId, stars, description } = req.body;
  try {
    if (userId && announcementId && stars) {
      await Review.create({ userId, announcementId, stars, description });

      return res.json({ success: "Review added successfully" });
    }
  } catch (err) {
    next(err);
    return res.send({ error: "Post failed. Try again" }).status(409);
  }
};