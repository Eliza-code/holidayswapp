const { Announcement, User } = require("../../db");
const { Op } = require("sequelize");

module.exports = async (req, res, next) => {
  const { name } = req.query;
  //console.log(name);
  if (name) {
      try {
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
          } 
          catch(err){
                next(err);
            res.json(err);
          }
          } else if (req.query.filter) {
            try {
              let announcementFilter = await Announcement.findAll({
                where: {
                  type: req.query.filter,
                },
                // order: [["surfaceM2", req.query.order]],
              });
              return res.json(announcementFilter);
            } 
            catch(err){
                  next(err);
              res.json(err);
            }
          } else {
            try {
              let announcementRating = await Announcement.findAll({
                order: [["surfaceM2", req.query.order]],
              });
              return res.json(announcementRating);
            } 
            catch(err){
                  next(err);
              res.json(err);
            }
          }
        };
