const { Announcement } = require("../../db");

module.exports = async (req, res) => {
  const { id } = req.params;
  try {
    let announcementById = await Announcement.findByPk(id);
    announcementById ? res.send(announcementById) : res.sendStatus(404);
  } catch (error) {
    res.send({ error: error.message }).status(409);
  }
};
