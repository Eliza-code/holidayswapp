const { Points } = require("../../db");

const getInfoPoints = async () => {
  try {
    await Points.create({
      name: "Points",
      price: 1,
      quantiyi: 100000,
      img: "",
    });
} catch (e) {
    console.log(e);
  }
};

module.exports = {
  getInfoPoints,
};
