const { Favourite } = require("../../db");

module.exports = async (req, res, next) => {
  let { id } = req.query;
  try {
    let favourite = await Favourite.findAll();
    
    let filter = favourite.filter((e) => e.userId == id);
    

    return res.json(favourite);
  } catch (err) {
    return res.send({ error: err.message }).status(409);
  }
};
