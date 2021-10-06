const { Review } = require("../../db");

const getInfoReviews = async () => {
  try {
    await Review.create({
      stars: 5,
      description: "The apartment is comfortable and pleasant",
      userId: 1,
      announcementId: 2,
    });
    await Review.create({
      stars: 3,
      description:
        "The apartment is very comfortable and beautiful. Excellent location",
      userId: 2,
      announcementId: 1,
    });
    await Review.create({
      stars: 3,
      description:
        "A very comfortable apartment, all the furniture in excellent condition",
      userId: 3,
      announcementId: 4,
    });
    await Review.create({
      stars: 4,
      description: "Very good location, comfortable facilities, well equipped",
      userId: 4,
      announcementId: 3,
    });
    await Review.create({
      stars: 3,
      description: "Friendliness, predisposition and location",
      userId: 5,
      announcementId: 6,
    });
    await Review.create({
      stars: 3,
      description:
        "Good location in this beautiful accommodation and all kinds of amenities",
      userId: 6,
      announcementId: 5,
    });
    await Review.create({
      stars: 5,
      description: "Friendliness, predisposition and location",
      userId: 7,
      announcementId: 8,
    });
    await Review.create({
      stars: 3,
      description:
        "A very comfortable apartment, all the furniture in excellent condition",
      userId: 8,
      announcementId: 7,
    });
    await Review.create({
      stars: 3,
      description:
        "A very comfortable apartment, all the furniture in excellent condition",
      userId: 9,
      announcementId: 10,
    });
    await Review.create({
      stars: 3,
      description:
        "A very comfortable apartment, all the furniture in excellent condition",
      userId: 10,
      announcementId: 9,
    });
    await Review.create({
      stars: 3,
      description: "Friendliness, predisposition and location",
      userId: 11,
      announcementId: 12,
    });
    await Review.create({
      stars: 3,
      description:
        "A very comfortable apartment, all the furniture in excellent condition",
      userId: 12,
      announcementId: 11,
    });
    await Review.create({
      stars: 5,
      description: "Very good location, comfortable facilities, well equipped",
      userId: 13,
      announcementId: 14,
    });
    await Review.create({
      stars: 2,
      description:
        "Good location in this beautiful accommodation and all kinds of amenities",
      userId: 14,
      announcementId: 13,
    });
    await Review.create({
      stars: 3,
      description:
        "A very comfortable apartment, all the furniture in excellent condition",
      userId: 15,
      announcementId: 16,
    });
    await Review.create({
      stars: 3,
      description: "Very good location, comfortable facilities, well equipped",
      userId: 16,
      announcementId: 15,
    });
    await Review.create({
      stars: 3,
      description:
        "Good location in this beautiful accommodation and all kinds of amenities",
      userId: 17,
      announcementId: 18,
    });
    await Review.create({
      stars: 3,
      description: "Very good location, comfortable facilities, well equipped",
      userId: 18,
      announcementId: 17,
    });
    await Review.create({
      stars: 5,
      description:
        "A very comfortable apartment, all the furniture in excellent condition",
      userId: 19,
      announcementId: 20,
    });
    await Review.create({
      stars: 4,
      description:
        "A very comfortable apartment, all the furniture in excellent condition",
      userId: 20,
      announcementId: 19,
    });
    await Review.create({
      stars: 3,
      description: "The apartment is comfortable and pleasant",
      userId: 21,
      announcementId: 22,
    });
    await Review.create({
      stars: 3,
      description:
        " Good location in this beautiful accommodation and all kinds of amenities",
      userId: 22,
      announcementId: 21,
    });
    await Review.create({
      stars: 3,
      description: "Very good location, comfortable facilities, well equipped",
      userId: 23,
      announcementId: 24,
    });
    await Review.create({
      stars: 3,
      description:
        "Good location in this beautiful accommodation and all kinds of amenities",
      userId: 24,
      announcementId: 23,
    });
    await Review.create({
      stars: 5,
      description:
        "The apartment is very comfortable and beautiful. Excellent location",
      userId: 25,
      announcementId: 26,
    });
    await Review.create({
      stars: 2,
      description: "The apartment is comfortable and pleasant",
      userId: 26,
      announcementId: 25,
    });
    await Review.create({
      stars: 4,
      description:
        "The apartment is very comfortable and beautiful. Excellent location",
      userId: 27,
      announcementId: 28,
    });
    await Review.create({
      stars: 3,
      description: " The apartment is comfortable and pleasant",
      userId: 28,
      announcementId: 27,
    });
    await Review.create({
      stars: 3,
      description:
        "The apartment is very comfortable and beautiful. Excellent location",
      userId: 29,
      announcementId: 30,
    });
    await Review.create({
      stars: 3,
      description: "The apartment is comfortable and pleasant",
      userId: 30,
      announcementId: 29,
    });
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  getInfoReviews,
};
