//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { getInfoAnnoun } = require("./src/utils/Announcements/preload/announcements.preload")
const { getInfoUsers } = require("./src/utils/Users/users.data")
const { getInfoReviews} = require("./src/utils/Reviews/reviews.data")
const { getInfoOrders } = require("./src/utils/Orders/orders.data")
const { getInfoPoints } = require("./src/utils/Points/pointsData")
const { User } = require("./src/db");

// Syncing all the models at once.
conn.sync({ force: true }).then(async() => {
  await server.listen(3001, async () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
    
    //PUSE UNA CONDICION ASI CARGA SOLO SI ESTA VACIA LA DB ---> YAMILA
    const dbdata = await User.findAll();
    if (dbdata.length === 0) {
      try {
        await getInfoUsers();
        await getInfoAnnoun();
        await getInfoReviews();
        await getInfoOrders();
        await getInfoPoints();
      } catch (error) {
        console.log(error);
      }
    }
  });
});
