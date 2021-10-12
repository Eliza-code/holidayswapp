const { Order, Announcement, User } = require('../../db');

module.exports = async (req, res) => {
  const { orderId } = req.body;
//   console.log("OrderId: " + orderId)

  try {
    const order = await Order.findAll({
      where: {
        id: orderId,
      },
      include: [{
        model: Announcement,
        attributes: [
                      'country',
                      'state',
                      'city',
                      'adress',
                      'type',
                      'points',
                      'description'
                    ]
      },
      {
        model: User,
        attributes: [ 
                      'name', 
                      'profilePicture'
                      
                      
                    ]
      }]
    });
   
    const {user} = order[0];
    // console.log(user,"data")
    
    return res.status(200).send(user);
  } catch (error) {
      console.log(error)
    // return res.status(409).send(error);
  }
};