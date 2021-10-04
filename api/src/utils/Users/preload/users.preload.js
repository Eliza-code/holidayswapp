const { User } = require("../../../db");
const user  = require("../data/users.data");
const bcrypt = require('bcrypt');

async function getInfoUsers (req, res) {
  const hashedPassword = await bcrypt.hash("Password123", 12);
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
              password: hashedPassword,
              phoneNumber: el.phoneNumber,
              dateOfBirth: el.dateOfBirth,
              nacionality: el.nacionality,
              languagesSpoken: el.languagesSpoken,
            },
            
          });
        
          //   const hashedPassword = await bcrypt.hash(userData.password, 12) ;     
          // userData.password = hashedPassword
            
          return userData;
        } catch (error) {
          console.log(error);
  }
})
}

  module.exports = {
    getInfoUsers,
  };