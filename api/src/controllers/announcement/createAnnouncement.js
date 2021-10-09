const { Announcement, User } = require("../../db");

module.exports = async (req, res, next) => {
  const {
    id,
    title,
    owner,
    country,
    city,
    type,
    arrivealDate,
    departureDate,
    points,
    sleeps,
    bedrooms,
    beds,
    bathrooms,
    surfaceM2,
    smokersWelcome,
    petsWelcome,
    childremWelcome,
    wifi,
    tv,
    washing_machine,
    fridge,
    a_c,
    private_parking,
    image,
    rating,
  } = req.body;

  try {
    const user = await User.findByPk(id);

    if (!user) {
      throw new Error(`User with id: ${id} not found`);
    }

    const newAnnouncement = {
      id,
      title,
      owner,
      country,
      city,
      type,
      arrivealDate,
      departureDate,
      points,
      sleeps,
      bedrooms,
      beds,
      bathrooms,
      surfaceM2,
      smokersWelcome,
      petsWelcome,
      childremWelcome,
      wifi,
      tv,
      washing_machine,
      fridge,
      a_c,
      private_parking,
      image,
      rating,
    };

    const announcement = await Announcement.create(newAnnouncement);

    await user.addAnnouncement(announcement.id);
    await announcement.setUser(user.id);

    res.json(announcement);
  } catch (err) {
    next(err);
    return res.status(409).send({ error: err.message });
  }
};
