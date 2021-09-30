const { User } = require("../../../db");
const user  = require("../data/announcements.data")

async function getInfoUsers (req, res) {
      user.map(async (el) => {
        try {
            const userData = await User.findOrCreate({
            where: {
                username: el.owner,
            },
            defaults: {
              username: el.username,
              email: 'user@email.com',
              password: "hashedPasswordA",
            },
          });
          return userData;
        } catch (error) {
          console.log(error);
  }
})
}

  module.exports = {
    getInfoUsers
  };