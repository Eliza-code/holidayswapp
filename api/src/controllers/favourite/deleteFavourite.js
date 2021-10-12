const { Favourite } = require('../../db');

module.exports = async (req , res) => {
    const { id } = req.params
   console.log(id)
    try {
      await Favourite.destroy({
        where: {
          id: id
        }
      });
      return res.json ({ erased: true})
    } catch (error) {
      return res.send({ error: err.message }).status(409);
    }
  }

