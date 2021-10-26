const { Favourite } = require("../../db");

module.exports = async (req, res) => {
  try {
    let favourites = await Favourite.findAll();
    return res.json(favourites);
  } catch (err) {
    return res.send({ error: err.message }).status(409);
  }
};
