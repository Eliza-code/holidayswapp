const { Router } = require("express");
const { Announcement, User } = require("../db");
const { Op } = require("sequelize");
const axios = require("axios");
const router = Router();

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    let announcementById = await Announcement.findByPk(id);
    announcementById ? res.send(announcementById) : res.sendStatus(404);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/", async (req, res) => {
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
});

router.put("/:id", async (req, res) => {
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
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    let act = await Announcement.destroy({
      where: {
        id: id,
      },
    });
    return res.json({ erased: true });
  } catch (err) {
    return res.send({ error: err.message }).status(409);
  }
});

module.exports = router;
