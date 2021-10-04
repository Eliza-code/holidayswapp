const { Review } = require('../../db');

module.exports = async (req, res) => {
    let { announcementId, userId, stars, description } = req.body;
  
    let review = await Review.create({
      announcementId,
      userId,
      stars,
      description,
    });
  
    return res.json({ success: "Review added successfully" });
  }

