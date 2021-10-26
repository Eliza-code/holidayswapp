const { Announcement } = require("../../db");

module.exports = async (req, res) => {
  const { id } = req.params;

  try {
    let act = await Announcement.destroy({
      where: {
        id: id,
      },
    });
    return res.json({ success: "Announcement successfully deleted" });
  } catch (err) {
    return res.send({ error: err.message }).status(409);
  }
};
