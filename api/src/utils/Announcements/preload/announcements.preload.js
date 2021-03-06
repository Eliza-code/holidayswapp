const { Announcement } = require("../../../db");
const announcement = require("../data/announcements.data");

async function getInfoAnnoun(req, res) {
  announcement.map(async (el) => {
    try {
      const announcementData = await Announcement.findOrCreate({
        where: {
          owner: el.owner,
        },
        defaults: {
          userId: el.userId,
          title: el.title,
          owner: el.owner,
          country: el.country,
          state: el.state,
          city: el.city,
          adress: el.adress,
          type: el.type,
          points: el.points,
          sleeps: el.sleeps,
          bedrooms: el.bedrooms,
          bathrooms: el.bathrooms,
          beds: el.beds,
          surfaceM2: el.surfaceM2,
          description: el.description,
          smokersWelcome: el.home_rules.smokersWelcome,
          petsWelcome: el.home_rules.petsWelcome,
          childremWelcome: el.home_rules.childremWelcome,
          wifi: el.amenities.Wifi,
          tv: el.amenities.tv,
          washing_machine: el.amenities.washing_machine,
          fridge: el.amenities.fridge,
          a_c: el.amenities.a_c,
          private_parking: el.amenities.private_parking,
          image: el.image?.map((i) => i),
          rating: el.rating,
          arrivealDate: el.arrivealDate,
          departureDate: el.departureDate,
        },
      });
      return announcementData;
    } catch (error) {
      console.log(error);
    }
  });
}

module.exports = {
  getInfoAnnoun,
};
