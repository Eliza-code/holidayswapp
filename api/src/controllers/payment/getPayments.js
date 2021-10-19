const { Payment } = require('../../db');

module.exports = async (req, res) => {
    try {
        let payments = await Payment.findAll();
        return res.json(payments);
      } catch (err) {
        return res.send({ error: err.message }).status(409);
      }
    }

