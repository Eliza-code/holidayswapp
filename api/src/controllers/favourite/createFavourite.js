const { Favourite } = require("../../db");

module.exports = async (req, res) => {
  let { userId, announcementId } = req.body;

  try {
    if (userId && announcementId) {
      const favorite = await Favourite.create({ userId, announcementId });

      return res.status(200).json(favorite);
    }
  } catch (err) {
    return res.send({ error: err.message }).status(409);
  }
};
