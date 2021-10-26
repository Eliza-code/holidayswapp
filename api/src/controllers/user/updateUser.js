const { User } = require("../../db.js");
const bcrypt = require("bcrypt");

module.exports = async (req, res, next) => {
  let user = req.body;
  let { id } = req.params;
  try {
    const updatedUser = await User.update(
      { ...user },
      {
        where: { id },
      }
    );

    return res.status(200).json(updatedUser);
  } catch (err) {
    next(error);
    return res.send(err.message).status(409);
  }
};
