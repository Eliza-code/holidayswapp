const { Announcement, User } = require("../../db");
const { Op } = require("sequelize");

module.exports = async (req, res) => {
  const { name } = req.query;
  //console.log(name);
  try {
    if (name) {
      const announcementLocation = await Announcement.findAll({
        where: {
          [Op.or]: [
            { city: { [Op.iLike]: `%${name}%` } },
            { country: { [Op.iLike]: `%${name}%` } },
          ],
        },
      });

      announcementLocation.length
        ? res.status(200).json(announcementLocation)
        : res
            .status(404)
            .send("The city or country with that name was not found");
    } else {
      const announcement = await Announcement.findAll({
        include: {
          model: User,
          attributes: ["username"],
        }
      });
      res.send(announcement);
    }
  } catch (error) {
    res.status(404).send(error);
  }
};