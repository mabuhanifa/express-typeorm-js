const typeorm = require("typeorm");
require("dotenv").config();

var dataSource = new typeorm.DataSource({
  type: "postgres",
  url: process.env.DB_URI,
  synchronize: true,
  //   entities: [require("./entity/Post"), require("./entity/Category")],
});

module.exports = dataSource;
