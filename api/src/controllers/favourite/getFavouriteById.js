const { Favourite, Announcement } = require("../../db");

module.exports = async (req, res, next) => {
  let { id } = req.params;
  try {
    let favourite = await Favourite.findAll({
      where: {
        userId: id,
      },
      include: {
        model: Announcement,
      },
    });

    return res.json(favourite);
  } catch (err) {
    return res.send({ error: err.message }).status(409);
  }
};
