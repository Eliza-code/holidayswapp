const { Announcement, User } = require("../../db");

module.exports = async (req, res, next) => {
  const {
    owner_id,
    title,
    owner,
    country,
    state,
    city,
    adress,
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
    
  } = req.body;

  try {
    const user = await User.findByPk(owner_id);

    if (!user) {
      throw new Error(`User with id: ${owner_id} not found`);
    }

    const newAnnouncement = {
      title,
      owner,
      country,
      state,
      city,
      adress,
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
