const { Announcement, User } = require("../../db");
const { Op } = require("sequelize");

module.exports = async (req, res) => {
<<<<<<< HEAD
  const { name } = req.query;
  console.log(name);
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
      const announcement = await Announcement.findAll();
      res.send(announcement);
=======
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
          : res.status(405).send("The country with that name was not found");
      } else {
        const announcement = await Announcement.findAll({
          include: User,
        });
        res.send(announcement);
      }
    } catch (error) {
       res.send({ error: error.message }).status(409);
>>>>>>> c757e334156e28f982d271ab8a61bfe956f485a1
    }
  } catch (error) {
    res.status(404).send(error);
  }
};
