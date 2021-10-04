const {Router} = require("express");
const { Announcement } = require("../db");
const { User } = require("../db")
const { Op } = require("sequelize");
const router = Router();


router.post('/', async (req, res) => {
    let announcement = req.body;
    try{
     const newAnnouncement = await Announcement.create({
        ...announcement,
    })
    return res.json(newAnnouncement)
    } catch (error) {
      console.log(error)
    }

});

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
  
    const { name } = req.query;
    console.log(name)
    try {
      if (name) {
        
          const announcementFound = await Announcement.findAll({
            where: {
              [Op.or]: [
                {city: { [Op.iLike]: `%${name}%`}},
                {country: { [Op.iLike]: `%${name}%`}},
              ]
            }
          });

          announcementFound.length
          ? res.status(200).json(announcementFound)
          : res.status(404).send("The country with that name was not found"); 
      } 
      else {
        const announcement = await Announcement.findAll({
            include: {
                as: "dueño",
                model: User,
            }
        });
        res.send(announcement);
      }
    } catch (error) {
      res.status(404).send(error);
    }
  });
  
  module.exports = router;
 

