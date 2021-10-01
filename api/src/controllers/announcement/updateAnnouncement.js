const { Announcement } = require('../../db');


module.exports = async (req, res) => {
    const { id } = req.params;
    const announcement = req.body;
  
    try {
      await Announcement.update(announcement, {
        where: {
          id: id,
        },
      });
      return res.json({ changed: true });
    } catch (err) {
      return res.send({ error: err.message }).status(409);
    }
  }