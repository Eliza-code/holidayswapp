const { Favourite } = require('../../db');

module.exports = async (req, res) => {
    let { userId, announcementId } = req.body;
  
    try {
      if (userId && announcementId) {
        await Favourite.create({ userId, announcementId });
  
        return res.json({ success: "Favourite added successfully" });
      }
    } catch (err) {
      return res.send({ error: err.message }).status(409);
    }
  }

