const { Announcement , User } = require('../../db');
const { Op } = require("sequelize");

module.exports = async (req, res) => {
    const { city } = req.query;
    const { country } = req.query;
    try {
      if (city) {
        const announcementCity = await Announcement.findAll({
          where: {
            city: { [Op.iLike]: `%${city}%` },
          },
        });
        announcementCity.length
          ? res.status(200).json(announcementCity)
          : res.status(404).send("The country with that name was not found");
      }
      if (country) {
        const announcementCountry = await Announcement.findAll({
          where: {
            country: { [Op.iLike]: `%${country}%` },
          },
        });
        announcementCountry.length
          ? res.status(200).json(announcementCountry)
          : res.status(404).send("The country with that name was not found");
      } else {
        const announcement = await Announcement.findAll({
          include: User,
        });
        res.send(announcement);
      }
    } catch (err) {
      return res.send({ error: err.message }).status(409);
    }
  }