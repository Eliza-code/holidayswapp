const { Router } = require("express");
const { User, Review } = require("../db");
const router = Router();

router.post("/", async (req, res) => {
  let { announcementId, userId, stars, description } = req.body;

  let review = await Review.create({
    announcementId,
    userId,
    stars,
    description,
  });

  return res.json({ success: "Review added successfully" });
});

router.get("/announcement/:id", async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      const review = await Review.findAll({
        where: { announcementId: id },
        include: {
          model: User,
          attributes: ["username"],
        },
      });
      return res.json(review);
    }
  } catch (err) {
    return res.send({ error: err.message }).status(409);
  }
});

router.get("/user/:id", async (req, res) => {
    const { id } = req.params;
    try {
      if (id) {
        const review = await Review.findAll({
          where: { userId: id },
        });
        return res.json(review);
      }
    } catch (err) {
      return res.send({ error: err.message }).status(409);
    }
  });

module.exports = router;
