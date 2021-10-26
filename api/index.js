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
const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const {
  getInfoAnnoun,
} = require("./src/utils/Announcements/preload/announcements.preload");
const { getInfoUsers } = require("./src/utils/Users/users.data");
const { getInfoReviews } = require("./src/utils/Reviews/reviews.data");
const { getInfoOrders } = require("./src/utils/Orders/orders.data");
const { getInfoPoints } = require("./src/utils/Points/pointsData");
const { User } = require("./src/db");
require("dotenv").config();
const { PORT } = process.env;

conn.sync({ force: false }).then(async () => {
  await server.listen(PORT, async () => {
    console.log(`%s listening at ${PORT}`);

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
