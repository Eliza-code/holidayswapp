const { Router } = require("express");
const { Favourites } = require("../db");
const router = Router();

router.post("/", async (req, res) => {
  let { userId, announcementId } = req.body;

  try {
    if (userId && announcementId) {
      await Favourites.create({ userId, announcementId });

      return res.json({ success: "Favourite added successfully" });
    }
  } catch (err) {
    return res.send({ error: err.message }).status(409);
  }
});

router.get("/", async (req, res) => {
try {
    let favourites = await Favourites.findAll();
    return res.json(favourites);
  } catch (err) {
    return res.send({ error: err.message }).status(409);
  }
});


router.delete("/:id", async (req , res) => {
    const { id } = req.params
   
    try {
      let act = await Favourites.destroy({
        where: {
          id: id
        }
      });
      return res.json ({ erased: true})
    } catch (error) {
      return res.send({ error: err.message }).status(409);
    }
  })

module.exports = router;
