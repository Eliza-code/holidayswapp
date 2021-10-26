require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

let sequelize =
  process.env.NODE_ENV === "production"
    ? new Sequelize({
        database: DB_NAME,
        dialect: "postgres",
        host: DB_HOST,
        port: 5432,
        username: DB_USER,
        password: DB_PASSWORD,
        pool: {
          max: 3,
          min: 1,
          idle: 10000,
        },
        dialectOptions: {
          ssl: {
            require: true,

            rejectUnauthorized: false,
          },
          keepAlive: true,
        },
        ssl: true,
      })
    : new Sequelize(
        `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
        { logging: false, native: false }
      );
const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

modelDefiners.forEach((model) => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const {
  Announcement,
  User,
  Review,
  Favourite,
  Order,
  Payment,
  Points,
  Payment_detail,
} = sequelize.models;

User.hasMany(Announcement);
Announcement.belongsTo(User);

User.hasMany(Order);
Order.belongsTo(User);

Announcement.hasMany(Order);
Order.belongsTo(Announcement);

User.hasMany(Payment);
Payment.belongsTo(User);

Payment.hasMany(Payment_detail);
Points.hasMany(Payment_detail);
Payment_detail.belongsTo(Points);

User.belongsToMany(Announcement, { through: Review });
Announcement.belongsToMany(User, { through: Review });

User.belongsToMany(Announcement, { through: Favourite });
Announcement.belongsToMany(User, { through: Favourite });

Review.belongsTo(User, {
  foreignKey: "userId",
});

Favourite.belongsTo(Announcement, {
  foreignKey: "announcementId",
});

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
