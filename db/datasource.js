const typeorm = require("typeorm");
require("dotenv").config();

var dataSource = new typeorm.DataSource({
  type: "postgres",
  url: process.env.DB_URI,
  synchronize: true,
  entities: [require("../entities/User"), require("../entities/Product")],
});

module.exports = dataSource;
