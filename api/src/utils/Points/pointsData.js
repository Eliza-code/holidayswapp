const { Points } = require("../../db");

const getInfoPoints = async () => {
try {
    await Points.create({
        name: "Points",
        price: 1,
        stock: 1000000,
    });
} catch (e) {
    console.log(e);
  }
};

module.exports = {
  getInfoPoints,
};
