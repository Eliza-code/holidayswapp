const { Announcement } = require("../../db");

module.exports = async (req, res) => {
  const { id } = req.params;
  const announcement = req.body;

  try {
    await Announcement.update(announcement, {
      where: {
        id: id,
      },
    });
    const updatedAnnouncement = await Announcement.findByPk(id);
    return res.status(200).json(updatedAnnouncement);
  } catch (err) {
    return res.send({ error: err.message }).status(409);
  }
};
