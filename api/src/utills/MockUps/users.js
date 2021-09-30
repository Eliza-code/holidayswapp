
const { User } = require("../../db");

const userCreate = async () => {
    // --- Users ---
    try {
        await User.create({
          name: 'Mariano Martinez',
          username: 'Eltiktoker52',
          email: 'user@email.com',
          password: "hashedPasswordA",
        })
      }catch (e) {
        console.log(e.message);
      }
    }

    module.exports = {
        userCreate,
    };