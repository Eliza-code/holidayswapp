const {Router} = require("express");
const { Announcement } = require("../db");
const { Op } = require("sequelize");
const axios = require("axios");
const { getInfoAnnoun } = require("../utills/Announcements/preload/announcements.preload")
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
    const { country}= req.query
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
        const announcementCity = await Announcement.findAll({
          where: {
            country: { [Op.iLike]: `%${country}%` },
          },
        });
        announcementCity.length
          ? res.status(200).json(announcementCity)
          : res.status(404).send("The country with that name was not found");
      } 
      
      else {
        const announcement = await Announcement.findAll();
        res.send(announcement);
      }
    } catch (error) {
      res.status(404).send(error);
    }
  });
  
  module.exports = router;
 

