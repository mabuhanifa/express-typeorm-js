const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Product",
  tableName: "product",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    title: {
      type: "varchar",
    },
    categories: {
      type: "simple-array",
    },
    description: {
      type: "text",
    },
    price: {
      type: "double",
    },
    rentPrice: {
      type: "double",
    },
    rentOption: {
      type: "enum",
      enum: ["perDay", "perMonth", "perYear"],
    },
    createdAt: {
      type: "timestamp",
      default: () => "CURRENT_TIMESTAMP",
    },
    viewCount: {
      type: "int",
      default: 0,
    },
    createdBy: {
      type: "int",
    },
  },
  relations: {
    user: {
      target: "User",
      type: "many-to-one",
      joinColumn: true,
      onDelete: "CASCADE",
    },
  },
});
