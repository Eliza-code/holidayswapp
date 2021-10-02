const { User } = require("../../../db");
const user  = require("../data/users.data")

async function getInfoUsers (req, res) {
      user.map(async (el) => {
        try {
            const userData = await User.findOrCreate({
            where: {
                username: el.username,
            },
            defaults: {
              username: el.username,
              profilePicture: el.profilePicture,
              name: el.name,
              lastName: el.lastName,
              email: el.email,
              password: el.password,
              // phoneNumber: el.phoneNumber,
              dateOfBirth: el.dateOfBirth,
              nacionality: el.nacionality,
              languagesSpoken: el.languagesSpoken,
            },
            
          });
          return userData;
        } catch (error) {
          console.log(error);
  }
})
}

  module.exports = {
    getInfoUsers,
  };