const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "User",
  tableName: "user",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    firstName: {
      type: "varchar",
    },
    lastName: {
      type: "varchar",
    },
    address: {
      type: "varchar",
    },
    email: {
      type: "varchar",
    },
    phone: {
      type: "varchar",
    },
    password: {
      type: "varchar",
    },
  },
});
